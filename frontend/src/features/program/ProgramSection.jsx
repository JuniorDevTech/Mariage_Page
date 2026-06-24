import ProgramCard from "./ProgramCard";

const ProgramSection = () => {
  const events = [
    {
      title: "Mairie",
      time: "09h00",
      place: "Mairie de Cocody",
    },

    {
      title: "Cérémonie religieuse",
      time: "10h30",
      place: "Église Vase d'Honneur Cedex",
    },

    {
      title: "Réception",
      time: "13h00",
      place: "Salle AKNEL Événementiel, Rue G37, 29",
    },
  ];

  return (
    <section
      id="program"
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

        <div className="mb-24 text-center">
          <p
            className="
              mb-4
              uppercase
              tracking-[8px]
              text-[#8B6F9B]
            "
          >
            Le Grand Jour
          </p>

          <h2
            className="
              mb-12
              text-6xl
              font-light
              text-[#6B4E71]
            "
          >
            Programme du mariage
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

        {/* Cards */}

        <div
          className="
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {events.map((event) => (
            <ProgramCard key={event.title} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
