import React from "react";
import {connect} from "react-redux"
import {chooseDevice} from "../../redux/actions";
import "./DeviceItem.css"
import Logo from "./hosting.svg"

class DeviceItem extends React.Component {

    constructor() {
        super();

        this.checkboxRef = React.createRef();
        console.log(this.props)
        this.state = {
            isItemChecked: false
        }
    }

    onItemClicked = () => {
        this.setState({isItemChecked: !this.state.isItemChecked});
        console.log(this.checkboxRef)
        this.checkboxRef.current.checked = this.state.isItemChecked;
        if (this.setState.isItemChecked)
            this.props.chooseDevice(this.props.name)


    }

    render() {
        return (
            <div className="device__item" onClick={this.onItemClicked}>
                <input type="checkbox" className="device__checkbox" ref={this.checkboxRef}
                       checked={this.state.isItemChecked} onChange={this.onItemClicked}/>
                <p>{this.props.name}</p>
                <img src={Logo} width="50px" height="50px"/>
            </div>
        );
    }
}

const mapStateToProps = state => {

    return {}
}

export default connect(mapStateToProps, {chooseDevice})(DeviceItem)