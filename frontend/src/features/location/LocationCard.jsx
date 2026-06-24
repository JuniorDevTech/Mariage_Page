const LocationCard = ({ title, time, color, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        rounded-2xl
        border
        p-5
        text-left
        transition-all
        duration-300
        ${
          active
            ? "border-[#C86B4A] bg-white shadow-lg"
            : "border-[#E8D9CF] bg-white/70"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <span
          className="h-4 w-4 rounded-full"
          style={{ backgroundColor: color }}
        />

        <div>
          <h3 className="font-medium text-[#3B2A20]">{title}</h3>

          <p className="text-[#8A6B58]">{time}</p>
        </div>
      </div>
    </button>
  );
};

export default LocationCard;
