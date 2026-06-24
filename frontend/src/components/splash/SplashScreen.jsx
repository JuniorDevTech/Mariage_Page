import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const SplashScreen = ({ onFinish }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        onFinish();
      }, 500);
    }, 4000);

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`
        fixed
        inset-0
        z-9999
        flex
        items-center
        justify-center
        transition-opacity
        duration-500
        ${visible ? "opacity-100" : "opacity-0"}
      `}
      style={{
        background:
          "linear-gradient(135deg, #C86B4A 0%, #D98A6A 40%, #8E6C88 100%)",
      }}
    >
      <div className="text-center animate-fadeIn">
        <div className="mb-6 flex justify-center">
          <Heart size={50} className="animate-pulse text-white" fill="white" />
        </div>

        <h1
          className="
            mb-4
            text-7xl
            font-light
            text-white
            animate-title
          "
        >
          Daniel & Léa
        </h1>

        <div className="mb-6 flex items-center justify-center">
          <div className="h-px w-16 bg-[#FFF8F4]" />

          <span className="mx-4 text-[#FFF8F4] font-light">01 Août 2026</span>

          <div className="h-px w-16 bg-[#FFF8F4]" />
        </div>

        <p
          className="
            uppercase
            tracking-[6px]
            text-[#FFF8F4]
          "
        >
          Notre Mariage
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
