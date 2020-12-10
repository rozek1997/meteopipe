import {GoogleApiWrapper, Map} from "google-maps-react";
import React from "react"
import "./MapContainer.css";

export class MapContainer extends React.Component {

    com
    //Map itse
    changeParentNodeStyle

    constructor(props) {
        super(props);
        this.mapContainerRef = React.createRef();
    }

    componentDidMount() {
        this.addStyleToParentContainer();
    }

    addStyleToParentContainer() {
        const divNode = this.mapContainerRef.current.parentNode;
        divNode.style.gridArea = "main";
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
    apiKey: "AIzaSyCq057wpthiUKUZ7s25Ytegqp181HIK2nY"
})(MapContainer);
