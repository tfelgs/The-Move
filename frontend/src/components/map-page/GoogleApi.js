import React, { useState } from "react";
import { GoogleMap, InfoWindow, useLoadScript } from "@react-google-maps/api";
import MapMarker from "./MapMarker";

export default function GoogleApi() {
  const { isLoaded } = useLoadScript({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  const [state, setState] = useState({
    map: 0,
    bars: [],
  });

  const center = {
    lat: 42.0308,
    lng: -93.6319,
  };

  const req = {
    query: "Bars in Ames",
    location: null,
    radius: "500",
  };

  function FindBars(result, status) {
    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
      setState((prev) => ({
        map: prev.map,
        bars: result,
      }));
    }
  }

  const onLoad = React.useCallback(function callback(map) {
    let service = new window.google.maps.places.PlacesService(map);
    req.location = new window.google.maps.LatLng(center);
    service.textSearch(req, FindBars);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100vh" }}
      center={center}
      zoom={14}
      onLoad={onLoad}
    >
      {state.bars.map((bar, index) => (
        <MapMarker key={index} position={bar.geometry.location} bar={bar}></MapMarker>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}
