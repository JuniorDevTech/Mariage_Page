import heroImage from "../../assets/images/hero.jpeg";
import heroz from "../../assets/images/jun.jpg.jpeg";
import { useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#C86B4A]
      "
    >
      {/* Background */}
      <img
        src={heroz}
        alt="Daniel et Lea"
        onLoad={() => setLoaded(true)}
        className={`
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-[center_15%]
          transition-opacity
          duration-1000
          ${loaded ? "opacity-100" : "opacity-0"}
        `}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/45" />
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
        <p className="mb-6 text-sm uppercase tracking-[8px] text-[#D9B06F]">
          Invitation au mariage de
        </p>

        <h1
          className="
          mb-6
          text-6xl
          md:text-8xl
          font-light
          leading-none
        "
        >
          Daniel & Léa
        </h1>

        <div className="mb-8 flex items-center justify-center gap-5">
          <div className="h-px w-20 bg-[#D9B06F]" />

          <span className="italic text-[#D9B06F]">1er Août 2026</span>

          <div className="h-px w-20 bg-[#D9B06F]" />
        </div>

        <p className="mx-auto mb-12 max-w-3xl text-lg italic text-white/90">
          "Nous serions honorés de partager ce moment unique avec vous."
        </p>

        <button
          onClick={() => {
            document
              .getElementById("rsvp")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
    rounded-full
    bg-[#C86B4A]
    px-10
    py-4
    text-lg
    font-semibold
    text-white
    transition
    hover:scale-105
  "
        >
          ❤️ CONFIRMER MA PRÉSENCE
        </button>

        <div className="mt-20 animate-bounce text-4xl">↓</div>
      </div>
    </section>
  );
}
