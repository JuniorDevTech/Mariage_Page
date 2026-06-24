import Footer from "../components/footer/Footer";

import HeroSection from "../features/home/HeroSection";
import ProgramSection from "../features/program/ProgramSection";
import RSVPSection from "../features/rsvp/components/RSVPSection";
import LocationSection from "../features/location/LocationSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <ProgramSection />

      <div className="flex items-center justify-center my-16">
        <div className="h-px w-32 bg-linear-to-r from-transparent via-[#C86B4A] to-transparent" />
        <span className="mx-4 text-[#C86B4A] text-lg">✦</span>
        <div className="h-px w-32 bg-linear-to-r from-transparent via-[#C86B4A] to-transparent" />
      </div>

      <RSVPSection />
      <div className="flex items-center justify-center my-16">
        <div className="h-px w-32 bg-linear-to-r from-[#C86B4A] to-[#8B6F9B]" />
        <span className="mx-4 text-[#6B4E71] text-lg">✦</span>
        <div className="h-px w-32 bg-linear-to-r from-[#8B6F9B] to-[#C86B4A]" />
      </div>
      <LocationSection />
      <Footer />
    </>
  );
};

export default HomePage;
