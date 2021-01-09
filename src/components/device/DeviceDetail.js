import React from "react";
import {connect} from "react-redux"
import {selectDevice} from "../../redux/actions";
import "./DeviceDetail.css"

class DeviceDetail extends React.Component {

    renderDetails() {

    }

    render() {
        return (
            <div className="device__detail">
                {this.props.selectedDevice.length !== 0 ? this.renderDetails() :
                    <p className="device__message">Choose device from the list or create new one</p>}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        selectedDevice: state.devicesStatus.selectedDevice
    }
}

export default connect(mapStateToProps, {chooseDevice: selectDevice})(DeviceDetail)