// src/components/MapComponent.js
import React from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

function MapComponent({ google, address }) {
    // Convert address to coordinates using Geocoding API (add the logic if needed)
    const defaultCoords = { lat: 37.7749, lng: -122.4194 };  // Example coordinates (San Francisco)

    return (
        <div style={{ height: '300px', width: '100%' }}>
            <Map
                google={google}
                zoom={14}
                initialCenter={defaultCoords}
            >
                <Marker position={defaultCoords} />
            </Map>
        </div>
    );
}

export default GoogleApiWrapper({
    apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
})(MapComponent);
