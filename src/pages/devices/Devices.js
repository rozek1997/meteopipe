import React from "react";
import {connect} from "react-redux"
import {api} from "../../api/axios";
import {listDevices} from "../../redux/actions";
import DeviceList from "../../components/device/DeviceList";
import "./Devices.css"
import DeviceMap from "../../components/device/DeviceMap";

class Devices extends React.Component {

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


    render() {
        return (
            <div className="device">
                <div className="device__container">
                    <div className="device__list">
                        <h3>My devices</h3>
                        <DeviceList/>
                    </div>

                    <div className="device__details">
                        <h3>Device details</h3>

                    </div>
                    <div className="device__charts">
                        <h3>Charts</h3>

                    </div>
                    <div className="device__location">
                        <h3>Device location</h3>
                        <div className="device__map-container">
                            <DeviceMap/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null, {listDevices})(Devices)