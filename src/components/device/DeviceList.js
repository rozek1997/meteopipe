import React from "react";
import {connect} from "react-redux"
import DeviceItem from "./DeviceItem";
import "./DeviceList.css"


class DeviceList extends React.Component {

    renderList = () => {

        return this.props.deviceList.map(item => {
            console.log(item)
            return <DeviceItem key={item} name={item}/>
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="list__line"/>
                <ul className="list__description">
                    <li className="list__checked">Choose</li>
                    <li className="list__deviceID">Device ID</li>
                    <li className="list__logo">Logo</li>
                </ul>
                <ul className="list">
                    {this.renderList()}
                </ul>
                <div className="list__line"/>
            </React.Fragment>
        );
    }
}


const mapStateToProps = state => {
    return {
        deviceList: state.devicesStatus.deviceList
    }
}

export default connect(mapStateToProps)(DeviceList)