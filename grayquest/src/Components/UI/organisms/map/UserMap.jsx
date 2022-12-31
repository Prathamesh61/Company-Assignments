import React, { useCallback, useEffect, useRef } from 'react'
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const UserMap = ({ lat, long, area }) => {
    const options = {
        disableDefaultUI: true,
        zoomControl: true
    };
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyARN4ZLpzuzwGo2M6PKr2M--juR5zJyrew"
    });
    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);
    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMap
                id="map"
                zoom={10}
                center={{
                    lat,
                    long
                }}
                options={options}
                onLoad={onMapLoad}
            >
            </GoogleMap>
        </div >
    );
}

export default UserMap;

// GoogleApiWrapper({
//     apiKey: 'AIzaSyBu-916DdpKAjTmJNIgngS6HL_kDIKU0aU'
// })(UserMap);