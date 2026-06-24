import { useState } from "react";

import LocationCard from "./LocationCard";
import Map from "./Map";

const locations = [
  {
    id: 1,
    title: "Mairie de Cocody",
    time: "09h00",
    color: "#C86B4A", // Terracotta

    coordinates: {
      lat: 5.332978978296312,
      lng: -4.003364247425209,
    },
  },

  {
    id: 2,
    title: "Église Vase d'Honneur Cedex",
    time: "10h30",
    color: "#8B6F9B", // Violet doux

    coordinates: {
      lat: 5.363317280898291,
      lng: -3.9294825808113893,
    },
  },

  {
    id: 3,
    title: "Salle AKNEL Événementiel",
    time: "13h00",
    color: "#6B4E71", // Violet prune

    coordinates: {
      lat: 5.365782937599312,
      lng: -3.954481408210469,
    },
  },
];

const LocationSection = () => {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <section
      id="location"
      className="
    bg-linear-to-b
    from-[#FFF8F5]
    via-[#FAF7F4]
    to-[#F7F1FA]
    py-32
  "
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="mb-16 text-center">
          <p
            className="
      mb-4
      uppercase
      tracking-[8px]
      text-[#8B6F9B]
    "
          >
            Comment nous rejoindre
          </p>

          <h2
            className="
      mb-10
      text-6xl
      font-light
      text-[#6B4E71]
    "
          >
            Lieux des festivités
          </h2>

          <div className="flex items-center justify-center">
            <div className="h-px w-64 bg-[#DCCFE5]" />

            <div className="mx-4 flex">
              <span className="h-4 w-4 rounded-full bg-[#C86B4A]" />
              <span className="-ml-1 h-4 w-4 rounded-full bg-[#8B6F9B]" />
            </div>

            <div className="h-px w-64 bg-[#DCCFE5]" />
          </div>
        </div>

        {/* Locations */}

        <div className="mb-10 grid gap-6 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard
              key={location.id}
              {...location}
              active={selectedLocation.id === location.id}
              onClick={() => setSelectedLocation(location)}
            />
          ))}
        </div>

        {/* Map */}

        <div className="overflow-hidden rounded-3xl border border-[#E8D9CF] shadow-lg">
          <Map center={selectedLocation.coordinates} />
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
