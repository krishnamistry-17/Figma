import React, { useState } from "react";
import ReactMapGL, { NavigationControl } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN;

const CardMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 20,
    longitude: 78,
    zoom: 4,
  });
  return (
    <div className="sm:w-[65vw] md:w-[50vw] h-[100vh]">
      <ReactMapGL
        {...viewport}
        width="100%"
        height="100%"
        mapboxAccessToken={TOKEN}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onMove={(evt) => setViewport(evt.viewState)}
        getCursor={() => "default"}
        onResize={() => {}}
      >
        <NavigationControl
          style={{ position: "absolute", bottom: 20, left: 10 }}
        />
      </ReactMapGL>
    </div>
  );
};

export default CardMap;
