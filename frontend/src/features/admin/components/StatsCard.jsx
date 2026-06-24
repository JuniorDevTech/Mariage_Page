const StatsCard = ({ title, value }) => {
  return (
    <div
      className="
      rounded-3xl
      bg-white
      p-6
      shadow-sm
    "
    >
      <h3 className="text-sm text-gray-500">{title}</h3>

      <p className="mt-2 text-4xl font-bold text-[#C86B4A]">{value}</p>
    </div>
  );
};

export default StatsCard;
