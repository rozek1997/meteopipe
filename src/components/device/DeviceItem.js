import React from "react";
import {connect} from "react-redux"
import {selectDevice} from "../../redux/actions";
import {api} from "../../api/axios"
import "./DeviceItem.css"
import Logo from "./hosting.svg"
import Cancel from "./cancel.svg"

class DeviceItem extends React.Component {

    onItemClicked = () => {

        const {selectedDevice, name} = this.props;

        if (selectedDevice === name)
            this.props.selectDevice("");
        else
            this.props.selectDevice(this.props.name);
    }

    onDeleteButtonClicked = async () => {
        if (window.confirm(`Are you sure you want to delete this device: ${this.props.name}`)) {
            try {
                await api.removeDevice(this.props.name);
                await this.props.reloadList();
            } catch (e) {
                console.log(e)
            }
        }
    }

    render() {
        return (
            <div className="device__item">
                <div className="device__item-clickable" onClick={this.onItemClicked}>
                    <input type="checkbox" className="device__checkbox"
                           checked={this.props.checked} onChange={this.onItemClicked}/>
                    <p className="device__name">{this.props.name}</p>
                    <img src={Logo} width="50px" height="50px" alt="iot device"/>
                </div>
                <img src={Cancel} width="20px" height="20px" onClick={this.onDeleteButtonClicked}
                     className="device__delete"
                     alt="cancel button"/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedDevice: state.devicesStatus.selectedDevice
    }
}


export default connect(mapStateToProps, {selectDevice})(DeviceItem)