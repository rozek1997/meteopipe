import React from "react";
import {connect} from "react-redux"
import {chooseDevice} from "../../redux/actions";
import "./DeviceItem.css"

class DeviceDetailBox extends React.Component {

    constructor() {
        super();


    }

    render() {
        return (
            <div className="device__detailBox">

            </div>
        );
    }
}

const mapStateToProps = state => {

    return {}
}

export default connect(mapStateToProps, {chooseDevice})(DeviceItem)