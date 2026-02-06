// <div
//   className="w-full min-h-[450px] bg-[url('/image/content/map-bg.png')] bg-no-repeat bg-cover
// lg:min-h-[818px]"
// >

// </div>
//  https://scp111.hosting.reg.ru:2083/cpsess6997991663/frontend/jupiter/filemanager/index.html

import React, { useEffect } from "react";
import GoogleMapReact from "google-map-react";

const CustomMarker = () => (
  <div>
    <svg
      width="57"
      height="93"
      viewBox="0 0 57 93"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        width="57"
        height="93"
        viewBox="0 0 57 93"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M53.6934 40.3324L28.3446 93L2.99573 40.3324C-5.9936 21.6551 7.61661 0 28.3446 0C49.0725 0 62.6828 21.6551 53.6934 40.3324ZM28.3461 35C32.7085 35 36.245 31.6421 36.245 27.5C36.245 23.3578 32.7085 20 28.3461 20C23.9836 20 20.4471 23.3578 20.4471 27.5C20.4471 31.6421 23.9836 35 28.3461 35Z"
          fill="#4574EF"
        />
      </svg>
    </svg>
  </div>
);

export default function Map() {
  const defaultProps = {
    center: { lat: 59.880902, lng: 30.402819 },
    zoom: 16,
    styles: [
      {
        stylers: [
          {
            hue: "#ff1a00",
          },

          {
            invert_lightness: true,
          },
          {
            saturation: -100,
          },
          {
            lightness: 33,
          },
          {
            gamma: 0.5,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
      },
    ],
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "64vh", width: "100%" }} className="pb-12 md:pt-[58px]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDw4ypoJbMz_pDoyEVdxn0s_hxDZ3M0chE" }}
        defaultCenter={defaultProps.center}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={defaultProps.zoom}
        options={defaultProps}
      >
        <CustomMarker lat={59.880902} lng={30.402819} />
      </GoogleMapReact>
    </div>
  );
}
