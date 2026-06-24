import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
      bg-linear-to-r
      from-[#2E1B14]
      via-[#3B241A]
      to-[#2A170F]
      py-28
      text-center
      text-white
    "
    >
      <div className="mx-auto max-w-4xl px-6">
        {/* Noms */}

        <h2
          className="
          mb-8
          text-7xl
          font-light
          text-white
        "
        >
          Daniel & Léa
        </h2>

        {/* Date */}

        <div className="mb-12 flex items-center justify-center">
          <div className="h-px w-20 bg-[#C89A57]" />

          <span className="mx-5 text-[#C89A57]">1er Août 2026</span>

          <div className="h-px w-20 bg-[#C89A57]" />
        </div>

        {/* Message */}

        <p
          className="
          mb-16
          text-xl
          italic
          text-[#EADFD8]
        "
        >
          Merci de confirmer votre présence avant le 10 juillet 2026.
        </p>

        {/* Réseaux */}

        <div className="mb-16 flex justify-center gap-6">
          <a
            href="#"
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            transition
            hover:scale-110
            hover:border-[#C89A57]
          "
          >
            <FaInstagram size={22} />
          </a>

          <a
            href="#"
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-white/20
            transition
            hover:scale-110
            hover:border-[#C89A57]
          "
          >
            <FaFacebook size={22} />
          </a>
        </div>

        {/* Signature */}

        <div
          className="
          flex
          items-center
          justify-center
          gap-2
          uppercase
          tracking-[4px]
          text-[#B8A59A]
        "
        >
          <span>Avec tout notre amour</span>

          <Heart size={16} fill="currentColor" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
