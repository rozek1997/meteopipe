import React from "react";
import {connect} from "react-redux"
import DeviceItem from "./DeviceItem";
import "./DeviceList.css"
import Loader from "../loader/Loader";


class DeviceList extends React.Component {

    renderList = () => {

        const {selectedDevice, reloadList} = this.props;
        return this.props.deviceList.map(item => {
            const isItemChecked = item === selectedDevice;
            return <DeviceItem key={item} name={item} reloadList={reloadList} checked={isItemChecked}/>
        });
    }

    render() {
        const deviceList = this.props.deviceList;

        return (
            <React.Fragment>
                <div className="list__line"/>
                <ul className="list__description">
                    <li className="list__checked">Choose</li>
                    <li className="list__deviceID">Device ID</li>
                    <li className="list__logo">Logo</li>
                </ul>
                <ul className="list">
                    {deviceList.length !== 0 ? this.renderList() : <Loader/>}
                </ul>
                <div className="list__line"/>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    const deviceStatus = state.devicesStatus;
    return {
        deviceList: deviceStatus.deviceList,
        selectedDevice: deviceStatus.selectedDevice
    }
}

export default connect(mapStateToProps)(DeviceList)