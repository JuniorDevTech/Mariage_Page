import { Heart } from "lucide-react";
import RSVPForm from "./RSVPForm";

const RSVPSection = () => {
  return (
    <section
      id="rsvp"
      className="
     relative
     overflow-hidden
     bg-linear-to-b
     from-[#FFF8F5]
     via-[#FAF7F4]
     to-[#F7F1FA]
     py-32
   "
    >
      {/* Halo Terracotta */}{" "}
      <div
        className="
       absolute
       -top-32
       -left-32
       h-80
       w-80
       rounded-full
       bg-[#C86B4A]/10
       blur-3xl
     "
      />
      {/* Halo Violet */}
      <div
        className="
      absolute
      -right-32
      bottom-0
      h-96
      w-96
      rounded-full
      bg-[#8B6F9B]/10
      blur-3xl
    "
      />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mb-20 text-center">
          <div
            className="
          mb-6
          flex
          justify-center
        "
          >
            <div
              className="
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            bg-linear-to-br
            from-[#C86B4A]
            to-[#8B6F9B]
            shadow-lg
            animate-pulse
          "
            >
              <Heart size={32} className="text-white" fill="white" />
            </div>
          </div>

          <p
            className="
          mb-4
          uppercase
          tracking-[10px]
          text-[#8B6F9B]
        "
          >
            Votre Réponse
          </p>

          <h2
            className="
          mb-8
          text-5xl
          md:text-6xl
          font-light
          text-[#6B4E71]
        "
          >
            Confirmer votre présence
          </h2>

          <div className="mb-10 flex items-center justify-center">
            <div className="h-px w-40 bg-[#DCCFE5]" />

            <div className="mx-5 flex">
              <span className="h-4 w-4 rounded-full bg-[#C86B4A]" />
              <span className="-ml-1 h-4 w-4 rounded-full bg-[#8B6F9B]" />
            </div>

            <div className="h-px w-40 bg-[#DCCFE5]" />
          </div>

          <p
            className="
          mx-auto
          mb-10
          max-w-2xl
          text-lg
          leading-relaxed
          text-[#7A677C]
        "
          >
            Nous serions ravis de partager cette journée exceptionnelle avec
            vous. Merci de nous confirmer votre présence afin de préparer cette
            célébration dans les meilleures conditions.
          </p>

          <div
            className="
          mx-auto
          max-w-xl
          rounded-3xl
          border
          border-white/40
          bg-white/70
          px-8
          py-6
          shadow-xl
          backdrop-blur-sm
        "
          >
            <p
              className="
            text-sm
            uppercase
            tracking-[4px]
            text-[#8B6F9B]
          "
            >
              Date limite de confirmation
            </p>

            <p
              className="
            mt-3
            text-xl
            text-[#6B4E71]
          "
            >
              Merci de confirmer votre présence avant le
              <span className="font-semibold text-[#C86B4A]">
                {" "}
                10 juillet 2026
              </span>
            </p>
          </div>
        </div>

        <RSVPForm />
      </div>
    </section>
  );
};

export default RSVPSection;
