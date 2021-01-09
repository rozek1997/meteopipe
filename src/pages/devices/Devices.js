import React from "react";
import {connect} from "react-redux"
import {api} from "../../api/axios";
import {listDevices} from "../../redux/actions";
import DeviceList from "../../components/device/DeviceList";
import DeviceMap from "../../components/device/DeviceMap";
import DeviceDetail from "../../components/device/DeviceDetail";
import "./Devices.css"
import DeviceRegistrationModal from "../../components/device/DeviceRegistrationModal";

class Devices extends React.Component {

    constructor(props) {
        super(props);

        this.popupRef = React.createRef();

        this.state = {
            newDevice: {
                name: "",
                message: "",
                certURL: ""
            },
            popUpVisible: false
        }
    }

    componentDidMount() {
        this.getMyDevices()
    }

    getMyDevices = async (uuid) => {
        try {
            const response = await api.listMyDevices(uuid)
            this.props.listDevices(response["data"]["device_list"])
        } catch (e) {
            console.log(e)
        }
    }

    openAddDevicesModal = () => {
        this.setState({
            popUpVisible: true
        })
    }


    render() {

        const popupVisible = this.state.popUpVisible;

        return (

            <React.Fragment>
                <div className="device">
                    <div className="device__container">
                        <div className="device__list device__elem">
                            <h3>My devices</h3>
                            <button className="device__button" onClick={this.openAddDevicesModal}>+</button>
                            <DeviceList reloadList={this.getMyDevices}/>
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
                <DeviceRegistrationModal visible={popupVisible} reloadList={this.getMyDevices}/>
            </React.Fragment>

        );
    }
}

export default connect(null, {listDevices})(Devices)