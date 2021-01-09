import React from "react"
import Input from "../form/Input";
import {api} from "../../api/axios";
import "./DeviceRegistrationModal.css"

class DeviceRegistrationModal extends React.Component {

    constructor(props) {
        super(props);
        this.popupRef = React.createRef();
        this.state = {
            newDevice: {
                name: "",
                message: "",
                certURL: ""
            }
        }
    }


    onRegisterDeviceInputChange = (event) => {
        const name = event.target.value;
        this.setState(prevState => ({
            newDevice: {
                ...prevState.newDevice,
                name,
            }

        }));
    }

    addNewDevices = async () => {
        const {name} = this.state.newDevice;
        let response = undefined
        if (name.length !== 0) {
            try {
                response = await api.registerDevice(name);
                console.log(response)
                this.setState(prevState => ({
                    newDevice: {
                        ...prevState.newDevice,
                        name: "",
                        message: "Device has been successfully provisioned. Copy the link by clicking the button below",
                        certURL: response.data["get_file_url"]
                    }
                }));
                await this.props.reloadList();

            } catch (e) {
                this.setState(prevState => ({
                    newDevice: {
                        ...prevState.newDevice,
                        name: "",
                        message: `Something went wrong, error: ${e}`
                    }

                }));
            }
        } else {
            this.setState(prevState => ({
                newDevice: {
                    ...prevState.newDevice,
                    message: "Provide name",
                }
            }));
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.onVisibilityPropsChnage();
    }

    onVisibilityPropsChnage = () => {
        const visible = this.props.visible;
        if (visible)
            this.displayModal();
        else
            this.hideModal();
    }

    displayModal = () => {
        this.popupRef.current.style.visibility = "visible"
    }

    hideModal = () => {
        this.popupRef.current.style.visibility = "hidden"
    }

    renderClipBoardButton = () => {
        return (
            <React.Fragment>
                <button className="device-registration__clipboardButton" onClick={this.copyToClipBoard}>Copy url to
                    clipboard
                </button>
            </React.Fragment>
        );
    }

    copyToClipBoard = async () => {
        const downloadURL = this.state.newDevice.certURL;
        try {
            await navigator.clipboard.writeText(downloadURL);
        } catch (e) {
            console.log("Failed to copy", e)
        }
    }

    render() {

        const device = this.state.newDevice;
        return (
            <div className="device__popup" onClick={this.hideModal} ref={this.popupRef}>
                <div className="device-registration__form" onClick={event => event.stopPropagation()}>
                    <h3 className="device-registration__title">Register device</h3>
                    <p className="device-registration__description">Provide thing name. App will provisioned new device
                        and return
                        link.
                        After that you have 10 minutes to download cert and keys which enable you connect to the
                        cloud</p>
                    <Input type="text" hint="device name" value={this.state.newDevice.name}
                           onChange={this.onRegisterDeviceInputChange}
                           name="name"/>
                    <button className="device-registration__button" onClick={this.addNewDevices}>Register device
                    </button>
                    <p className="fdevice-registration__message">{device.message}</p>
                    {/*{this.renderClipBoardButton(device.certURL)}*/}
                    {device.certURL.length > 0 ? this.renderClipBoardButton() : null}
                </div>
            </div>
        );
    }
}


export default DeviceRegistrationModal;