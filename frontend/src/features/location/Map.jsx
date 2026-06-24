import { MapPin, Navigation } from "lucide-react";
import { useState } from "react";

const Map = ({ center, title }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className="
          relative
          flex
          h-112.5
          items-center
          justify-center
          bg-linear-to-br
          from-[#FFF8F5]
          via-[#F7F1FA]
          to-[#EEDFD5]
        "
      >
        <div className="text-center">
          <MapPin size={70} className="mx-auto mb-4 text-[#C86B4A]" />

          <h3 className="mb-2 text-3xl font-semibold text-[#6B4E71]">
            {title}
          </h3>

          <p className="mb-6 text-gray-600">
            Cliquez pour obtenir votre itinéraire
          </p>

          <button
            onClick={() => setShowModal(true)}
            className="
              rounded-full
              bg-[#C86B4A]
              px-8
              py-4
              text-white
              shadow-lg
              transition
              hover:scale-105
            "
          >
            <span className="flex items-center gap-2">
              <Navigation size={18} />
              Voir l'itinéraire
            </span>
          </button>
        </div>
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
              Choisissez votre application
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
                📍 Google Maps
              </a>

              <a
                href={`https://waze.com/ul?ll=${center.lat},${center.lng}&navigate=yes`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  block
                  rounded-xl
                  bg-sky-500
                  px-4
                  py-3
                  text-center
                  text-white
                "
              >
                🚗 Waze
              </a>

              <button
                onClick={() => setShowModal(false)}
                className="
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
