import { useCallback, useEffect } from "react";
import { getStrapiURL } from "lib/api";
import { MapInteractionCSS } from "react-map-interaction";
import Image from "next/image";

export function ImageZoomModal({ isOpen, onClose, current }) {
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  const getImageLink = (image) => {
    const { url } = image.attributes;
    const imageUrl = url.startsWith("/") ? getStrapiURL(url) : url;
    return imageUrl;
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, handleClose]);

  return (
    <div
      className={`modal ${
        isOpen ? "" : "opacity-0 pointer-events-none"
      } fixed w-full h-screen top-0 left-0 flex items-center justify-center z-10`}
    >
      <div className="modal-overlay absolute w-full h-full bg-white opacity-95"></div>

      <div className="modal-container fixed w-full h-full z-50 overflow-y-auto ">
        <div
          className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-black text-sm z-50"
          onClick={handleClose}
        >
          <svg
            className="fill-current text-black"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
          </svg>
          (Esc)
        </div>

        <div className="modal-content container mx-auto h-full p-4 z-[1050]">
          {current && (
            <MapInteractionCSS>
              <img src={getImageLink(current)} alt={current.attributes.name} />
            </MapInteractionCSS>
          )}
        </div>
      </div>
    </div>
  );
}
