import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

export default function Map({ searchResult }) {
  const [selectedLocation, setSelectedLocation] = React.useState({});

  const coordinates = searchResult.map((res) => ({
    longitude: res.long,
    latitude: res.lat,
  }));

  const center = getCenter(coordinates);

  const [viewport, setViewport] = React.useState({
    latitude: center.latitude - 0.6,
    longitude: center.longitude,
    zoom: 10,
  });

  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/paolo12587/ckt1g5f6y0zna17o1spihf1c5"
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
      width="100%"
      height="100%"
      onViewportChange={(viewport) => setViewport(viewport)}
    >
      {searchResult.map((res, index) => (
        <div key={index}>
          <Marker
            longitude={res.long}
            latitude={res.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              role="img"
              aria-label="push-pin"
              onClick={() => setSelectedLocation(res)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === res.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={res.lat}
              longitude={res.long}
            >
              <p className="mr-2">{res.title}</p>
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}
//57:31
