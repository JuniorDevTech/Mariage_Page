import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useState } from "react";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const Map = ({ center, title }) => {
  const [showModal, setShowModal] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) {
    return <div className="h-112.5 animate-pulse bg-gray-200" />;
  }

  return (
    <>
      <div className="relative">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
          <Marker position={center} />
        </GoogleMap>

        <button
          onClick={() => setShowModal(true)}
          className="
            absolute
            bottom-6
            right-6
            rounded-full
            bg-[#C86B4A]
            px-6
            py-3
            font-medium
            text-white
            shadow-lg
            transition
            hover:scale-105
          "
        >
          📍 Voir l'itinéraire
        </button>
      </div>

      {showModal && (
        <div
          className="
            fixed
            inset-0
            z-50
            flex
            items-center
            justify-center
            bg-black/50
          "
        >
          <div className="w-full max-w-md rounded-3xl bg-white p-6">
            <h3 className="mb-2 text-2xl font-semibold text-[#6B4E71]">
              Itinéraire
            </h3>

            <p className="mb-6 text-gray-600">{title}</p>

            <div className="space-y-3">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${center.lat},${center.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  rounded-xl
                  bg-blue-600
                  px-4
                  py-3
                  text-center
                  text-white
                "
              >
                Ouvrir avec Google Maps
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="
                  mt-2
                  w-full
                  rounded-xl
                  border
                  py-3
                "
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Map;
