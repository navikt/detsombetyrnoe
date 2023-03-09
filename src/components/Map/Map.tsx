import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styled from "styled-components";

const MapWrap = styled.div`
  position: relative;
  width: 80%;
  height: 90vh; /* calculate height of the screen minus the heading */
`;

const StyledMap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const Map = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current,
      style: "http://localhost:3000/mapstyle.json", // https://openmaptiles.github.io/positron-gl-style/style-cdn.json
      center: [8.78, 64.28],
      zoom: 4.4,
    });
    map.addControl(new maplibregl.NavigationControl(), "top-right");
    const marker = new maplibregl.Marker({ color: "#FF0000" }).setLngLat([5.73, 58.97]).addTo(map);

    return () => {
      map.remove();
    };
  });

  return (
    <MapWrap>
      <StyledMap ref={mapContainer} />
    </MapWrap>
  );
};
