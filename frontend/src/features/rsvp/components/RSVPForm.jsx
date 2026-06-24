import { useEffect, useState } from "react";
import { Send } from "lucide-react";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import { createInvitation } from "../rsvpThunk";
import { resetRSVPState } from "../rsvpSlice";

const RSVPForm = () => {
  const dispatch = useAppDispatch();

  const { loading, success, error, message } = useAppSelector(
    (state) => state.rsvp,
  );

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    attendance: true,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (success) {
      setFormData({
        fullName: "",
        phone: "",
        attendance: true,
        message: "",
      });

      const timer = setTimeout(() => {
        dispatch(resetRSVPState());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      return alert("Veuillez saisir votre nom.");
    }

    if (!formData.phone.trim()) {
      return alert("Veuillez saisir votre téléphone.");
    }

    dispatch(
      createInvitation({
        fullName: formData.fullName,
        phone: formData.phone,
        attendance: formData.attendance,
        message: formData.message,
      }),
    );
  };

  return (
    <section id="rsvp">
      <form
        onSubmit={handleSubmit}
        className="
     mx-auto
     max-w-3xl
     rounded-3xl
     border
     border-[#E8D9CF]
     bg-white/70
     p-10
     shadow-sm
   "
      >
        <div className="grid gap-6">
          <div>
            <label className="mb-2 block text-sm uppercase tracking-wider text-[#8A6B58]">
              Nom & prénom
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Marie Dupont"
              className="w-full rounded-full border border-[#E8D9CF] px-5 py-4 outline-none focus:border-[#C86B4A]"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm uppercase tracking-wider text-[#8A6B58]">
              Téléphone
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+225 07 00 00 00"
              className="w-full rounded-full border border-[#E8D9CF] px-5 py-4 outline-none focus:border-[#C86B4A]"
            />
          </div>
        </div>
        <div className="mt-8">
          <label className="mb-3 block text-sm uppercase tracking-wider text-[#8A6B58]">
            Présence
          </label>

          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  attendance: true,
                })
              }
              className={`rounded-full border px-5 py-4 text-left transition ${
                formData.attendance
                  ? "border-[#C86B4A] bg-[#F4E8E0]"
                  : "border-[#E8D9CF]"
              }`}
            >
              Oui, je serai présent(e)
            </button>

            <button
              type="button"
              onClick={() =>
                setFormData({
                  ...formData,
                  attendance: false,
                })
              }
              className={`rounded-full border px-5 py-4 text-left transition ${
                !formData.attendance
                  ? "border-[#C86B4A] bg-[#F4E8E0]"
                  : "border-[#E8D9CF]"
              }`}
            >
              Non, je ne pourrai pas être présent(e)
            </button>
          </div>
        </div>
        <div className="mt-8">
          <label className="mb-2 block text-sm uppercase tracking-wider text-[#8A6B58]">
            Message aux mariés
          </label>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Un mot doux pour Daniel & Léa..."
            className="w-full rounded-3xl border border-[#E8D9CF] p-5 outline-none focus:border-[#C86B4A]"
          />
        </div>
        {success && (
          <div className="mt-6 rounded-2xl border border-green-300 bg-green-50 p-4 text-green-700">
            {message}
          </div>
        )}
        {error && (
          <div className="mt-6 rounded-2xl border border-red-300 bg-red-50 p-4 text-red-700">
            {error}
          </div>
        )}
        <div className="mt-10 text-center">
          <button
            type="submit"
            disabled={loading}
            className="
        inline-flex
        items-center
        gap-3
        rounded-full
        bg-[#C86B4A]
        px-10
        py-4
        text-white
        shadow-lg
        transition
        hover:scale-105
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
          >
            <Send size={18} />

            {loading ? "Envoi en cours..." : "Valider ma réponse"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default RSVPForm;
