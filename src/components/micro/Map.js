import { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import LocationPin from '../../images/location_pin.png';

const Map = () => {
    const [viewport, setViewPort] = useState({
        latitude: -7.6455217,
        longitude: 112.9164924,
        width: "100%",
        height: "50vh",
        zoom: 14,
    });
    
    const mapBoxToken = 'pk.eyJ1IjoiaW5kcmFjYiIsImEiOiJja20xazUzb3AwOHZrMnB1bDZxM2JqbmJqIn0.u18YM0U2ByjsLEDKjdnfLQ';

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={mapBoxToken}
                onViewportChange={viewport => setViewPort(viewport)}
            >
                <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
                    <img
                        src={LocationPin}
                        alt="https://www.freepik.com"
                        width="24px"
                        height="24px"
                    />
                </Marker>
            </ReactMapGL>
        </div>
    );
}

export default Map
