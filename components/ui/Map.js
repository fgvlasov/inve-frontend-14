"use client";

import GoogleMapReact from "google-map-react";

const CustomMarker = () => (
  <div>
    <svg width="57" height="93" viewBox="0 0 57 93" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.6934 40.3324L28.3446 93L2.99573 40.3324C-5.9936 21.6551 7.61661 0 28.3446 0C49.0725 0 62.6828 21.6551 53.6934 40.3324ZM28.3461 35C32.7085 35 36.245 31.6421 36.245 27.5C36.245 23.3578 32.7085 20 28.3461 20C23.9836 20 20.4471 23.3578 20.4471 27.5C20.4471 31.6421 23.9836 35 28.3461 35Z"
        fill="#4574EF"
      />
    </svg>
  </div>
);

export default function MapClient() {
  const center = { lat: 59.880902, lng: 30.402819 };
  const zoom = 16;

  // ✅ Только опции карты (styles и т.п.)
  const mapOptions = {
    styles: [
      {
        stylers: [
          { hue: "#ff1a00" },
          { invert_lightness: true },
          { saturation: -100 },
          { lightness: 33 },
          { gamma: 0.5 },
        ],
      },
      { featureType: "water", elementType: "geometry" },
    ],
  };

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  return (
    <div style={{ height: "64vh", width: "100%" }} className="pb-12 md:pt-[58px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: apiKey }}
        defaultCenter={center}
        defaultZoom={zoom}
        options={mapOptions}
        yesIWantToUseGoogleMapApiInternals
      >
        <CustomMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
}
