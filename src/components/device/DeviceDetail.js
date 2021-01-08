import React from "react";
import {connect} from "react-redux"
import {chooseDevice} from "../../redux/actions";
import "./DeviceDetail.css"

class DeviceDetail extends React.Component {

    renderDetails() {

    }

    render() {
        return (
            <div className="device__detail">
                {Object.keys(this.props.chosenDevice).length === 0 ? this.renderDetails() : "Choose device or create new one"}
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {
        chosenDevice: state.devicesStatus.chosenDevice
    }
}

export default connect(mapStateToProps, {chooseDevice})(DeviceDetail)