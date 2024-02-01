"use client";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import {
	StreetViewPanorama,
	GoogleMap,
	LoadScript,
} from "@react-google-maps/api";
import { contractInstance } from "../components/ContractConnect";

const containerStyle = {
	width: "100%",
	height: "400px",
};

const center = {
	lat: 37.7749,
	lng: -122.4194,
};

const options = {
	streetViewControl: true,
	disableDefaultUI: true,
	zoomControl: true,
	fullscreenControl: true,
};

const StreetView = async () => {
	const [map, setMap] = useState(null);
	const onLoad = React.useCallback((map) => {
		setMap(map);
	}, []);

	const gKey = process.env.NEXT_PUBLIC_GMAP_API;

	return (
		<LoadScript googleMapsApiKey={gKey}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={15}
				onLoad={onLoad}
				options={options}
			>
				<StreetViewPanorama position={center} visible={true} />
			</GoogleMap>
		</LoadScript>
	);
};

export default StreetView;
