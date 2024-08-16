"use client";
import { useEffect, useRef } from "react";
import maplibregl, { NavigationControl, Popup } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import styled from "styled-components";
import { UtviklerHeleNorge } from "src/app/(site)/page";

const MapWrap = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(var(--content-max-width));
  height: 90vh; /* calculate height of the screen minus the heading */
`;

const StyledMap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  h2 {
    margin-bottom: 1rem;
  }

  button:focus {
    box-shadow: none;
  }
`;

//const markers: LngLatLike[] = [[5.73, 58.97], [5.32, 60.39], [8.01, 58.15]]

export const Map = ({ markers }: { markers?: UtviklerHeleNorge[] }) => {
  const mapContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const map = new maplibregl.Map({
      container: mapContainer.current as HTMLElement,
      style: "/mapstyle.json", // https://openmaptiles.github.io/positron-gl-style/style-cdn.json
      //center: [17, 66],
      //zoom: 4,
      bounds: new maplibregl.LngLatBounds([4, 57], [32, 72]),
      interactive: true,
    });
    map.scrollZoom.disable();
    map.addControl(new NavigationControl({ showCompass: true, showZoom: true }), "top-right");
    //map.addControl(new maplibregl.NavigationControl({}), "top-right");
    const sortedMarkers = markers?.sort((a, b) => {
      const aCoordinates = `${a.geopoint.lng}-${a.geopoint.lat}`;
      const bCoordinates = `${b.geopoint.lng}-${b.geopoint.lat}`;
      if (aCoordinates < bCoordinates) {
        return 1;
      }
      if (aCoordinates > bCoordinates) {
        return -1;
      }
      return 0;
    });
    sortedMarkers?.map((marker) => {
      const popup = new Popup().setText(marker.sted);
      const markerElement = new maplibregl.Marker({ color: "#FF0000" })
        .setLngLat([marker.geopoint.lat, marker.geopoint.lng])
        .setPopup(popup)
        .addTo(map);
      markerElement._element.ariaLabel = marker.sted;
      markerElement._element.tabIndex = 0;
    });

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
