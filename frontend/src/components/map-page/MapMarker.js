import React from "react";
import { Marker, InfoWindow } from "@react-google-maps/api";
import InfoData from "./InfoData";

export default class MapMarker extends React.Component{
    state = {
        mapMarker: null,
        showingInfoWindow: false
    };

    onMarkerClick = () => {
        this.setState({
          showingInfoWindow: true
        });
      };
    
    onInfoWindowClose = () =>
    this.setState({
        showingInfoWindow: false
    });

    onLoad = (mapMarker) => {
    this.setState({
        mapMarker
    });
    };

    render() {
    return (
        <Marker
        onLoad={this.onLoad}
        position={this.props.position}
        clickable
        onClick={this.onMarkerClick}
        >
        {this.state.showingInfoWindow === true && (
            <InfoWindow
            position={this.props.position}
            onCloseClick={this.onInfoWindowClose}
            >
            <InfoData bar={this.props.bar} ></InfoData>
            </InfoWindow>
        )}
        </Marker>
     );
    }
}