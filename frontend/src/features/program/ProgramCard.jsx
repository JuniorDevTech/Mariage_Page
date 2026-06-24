import { CalendarDays, Clock3, MapPin } from "lucide-react";

const ProgramCard = ({ title, time, place }) => {
  return (
    <div
      className="
     group
     relative
     overflow-hidden
     rounded-4xl
     border
     border-white/30
     bg-white/80
     p-10
     text-center
     shadow-lg
     backdrop-blur-sm
     transition-all
     duration-500
     hover:-translate-y-4
     hover:shadow-2xl
   "
    >
      {/* Halo décoratif */}{" "}
      <div
        className="
       absolute
       -top-20
       -right-20
       h-40
       w-40
       rounded-full
       bg-[#C86B4A]/10
       blur-3xl
       transition-all
       duration-500
       group-hover:scale-150
     "
      />
      <div
        className="
      absolute
      -bottom-20
      -left-20
      h-40
      w-40
      rounded-full
      bg-[#8B6F9B]/10
      blur-3xl
      transition-all
      duration-500
      group-hover:scale-150
    "
      />
      {/* Icône */}
      <div
        className="
      mx-auto
      mb-8
      flex
      h-24
      w-24
      items-center
      justify-center
      rounded-full
      bg-linear-to-br
      from-[#C86B4A]
      to-[#8B6F9B]
      text-white
      shadow-lg
      transition-all
      duration-500
      group-hover:rotate-6
      group-hover:scale-110
    "
      >
        <CalendarDays size={36} />
      </div>
      {/* Titre */}
      <h3
        className="
      mb-6
      text-3xl
      font-light
      text-[#6B4E71]
    "
      >
        {title}
      </h3>
      {/* Heure */}
      <div
        className="
      mb-4
      flex
      items-center
      justify-center
      gap-2
      text-[#C86B4A]
    "
      >
        <Clock3 size={18} />

        <span className="font-medium">{time}</span>
      </div>
      {/* Lieu */}
      <div
        className="
      flex
      items-center
      justify-center
      gap-2
      text-[#8B6F9B]
    "
      >
        <MapPin size={18} />

        <span>{place}</span>
      </div>
      {/* Ligne décorative */}
      <div
        className="
      mx-auto
      mt-8
      h-0.5
      w-20
      rounded-full
      bg-linear-to-r
      from-[#C86B4A]
      to-[#8B6F9B]
    "
      />
    </div>
  );
};

export default ProgramCard;
