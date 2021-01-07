import {GoogleApiWrapper, Map} from "google-maps-react";
import React from "react"

// import "./DevicesMapPage.css";

export class DevicesMapPage extends React.Component {

    constructor(props) {
        super(props);
        this.mapContainerRef = React.createRef();
    }

    componentDidMount() {
        this.addStyleToParentContainer();
    }

    addStyleToParentContainer() {
        const divNode = this.mapContainerRef.current.parentNode;
        divNode.style.width = "100%";
        divNode.style.height = "100%";
    }

    render() {
        return (
            <div className="map-container" ref={this.mapContainerRef}>
                <Map google={this.props.google} zoom={6} initialCenter={{
                    lat: 52.237049,
                    lng: 21.01753
                }}>

                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
})(DevicesMapPage);
