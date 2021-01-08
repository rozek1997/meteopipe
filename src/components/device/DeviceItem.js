import React from "react";
import {connect} from "react-redux"
import {chooseDevice} from "../../redux/actions";
import {api} from "../../api/axios"
import "./DeviceItem.css"
import Logo from "./hosting.svg"
import Cancel from "./cancel.svg"

class DeviceItem extends React.Component {

    constructor() {
        super();

        this.checkboxRef = React.createRef();
        // console.log(this.props)
        this.state = {
            isItemChecked: false
        }
    }

    onItemClicked = () => {
        this.setState({isItemChecked: !this.state.isItemChecked});
        console.log(this.checkboxRef)
        this.checkboxRef.current.checked = this.state.isItemChecked;
        if (this.state.isItemChecked)
            this.props.chooseDevice(this.props.name)


    }

    onCancelClicked = async () => {
        if (window.confirm(`Are you sure you want to delete this device: ${this.props.name}`)) {
            try {
                await api.removeDevice(this.props.name);
                window.location.reload();
            } catch (e) {
                console.log(e)
            }
        }
    }

    render() {
        return (
            <div className="device__item">
                <div className="device__item-clickable" onClick={this.onItemClicked}>
                    <input type="checkbox" className="device__checkbox" ref={this.checkboxRef}
                           checked={this.state.isItemChecked} onChange={this.onItemClicked}/>
                    <p className="device__name">{this.props.name}</p>
                    <img src={Logo} width="50px" height="50px" alt="iot device"/>
                </div>
                <img src={Cancel} width="20px" height="20px" onClick={this.onCancelClicked} className="device__delete"
                     alt="cancel button"/>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {}
}

export default connect(mapStateToProps, {chooseDevice})(DeviceItem)