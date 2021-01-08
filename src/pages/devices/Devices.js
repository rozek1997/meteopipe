import React from "react";
import {connect} from "react-redux"
import {api} from "../../api/axios";
import {listDevices} from "../../redux/actions";
import Input from "../../components/form/Input"
import DeviceList from "../../components/device/DeviceList";
import DeviceMap from "../../components/device/DeviceMap";
import DeviceDetail from "../../components/device/DeviceDetail";
import "./Devices.css"

class Devices extends React.Component {

    constructor(props) {
        super(props);

        this.popupRef = React.createRef();
        this.state = {
            newDevice: {
                name: "",
                message: "",
            }
        }
    }

    componentDidMount() {
        this.getMyDevices("cb83d2e9-e212-463d-9b5e-25b2de315377")
    }

    getMyDevices = async (uuid) => {
        try {
            const response = await api.listMyDevices(uuid)
            this.props.listDevices(response["data"]["device_list"])
        } catch (e) {
            console.log(e)
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


    openAddDevicesModal = () => {
        this.popupRef.current.style.visibility = "visible"
    }

    addNewDevices = async () => {
        const {name} = this.state.newDevice;
        let response = undefined
        try {
            response = await api.registerDevice(name, "cb83d2e9-e212-463d-9b5e-25b2de315377");
            this.setState(prevState => ({
                newDevice: {
                    ...prevState.newDevice,
                    name: "",
                    message: "Device has been successfully provisioned. Copy the link from the button below",
                    certURL: response["get_file_url"]
                }
            }));

        } catch (e) {
            this.setState(prevState => ({
                newDevice: {
                    ...prevState.newDevice,
                    name: "",
                    message: `Something went wrong, error: ${e}`
                }

            }));
        }

        this.getMyDevices("cb83d2e9-e212-463d-9b5e-25b2de315377");

    }

    onBlackBackgroundClick = (event) => {
        event.preventDefault();
        this.popupRef.current.style.visibility = "hidden"
    }


    render() {

        const device = this.state.newDevice

        return (

            <React.Fragment>
                <div className="device">
                    <div className="device__container">
                        <div className="device__list device__elem">
                            <h3>My devices</h3>
                            <button className="device__button" onClick={this.openAddDevicesModal}>+</button>
                            <DeviceList/>
                        </div>

                        <div className="device__details device__elem">
                            <h3>Device details</h3>
                            <DeviceDetail/>
                        </div>
                        <div className="device__charts device__elem">
                            <h3>Charts</h3>

                        </div>
                        <div className="device__location device__elem">
                            <h3>Device location</h3>
                            <div className="device__map-container">
                                <DeviceMap/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="device__popup" onClick={this.onBlackBackgroundClick} ref={this.popupRef}>
                    <div className="device__form" onClick={event => event.stopPropagation()}>
                        <h3 className="form__title">Register device</h3>
                        <p className="form__description">Provide thing name. App will provisioned new device and return
                            link.
                            After that you have 10 minutes to download cert and keys which enable you connect to the
                            cloud</p>
                        <Input type="text" hint="device name" value={this.state.newDevice.name}
                               onChange={this.onRegisterDeviceInputChange}
                               name="name"/>
                        <button className="form__button" onClick={this.addNewDevices}>Register device</button>
                        <p className="form__message">{device.message}</p>
                        {device.certURL ? <button className="clipboard__button">Copy url to clipboard</button> : null}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default connect(null, {listDevices})(Devices)