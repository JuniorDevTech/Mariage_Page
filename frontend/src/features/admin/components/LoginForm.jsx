import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";

import { loginAdmin } from "../adminThunk";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const adminState = useAppSelector((state) => state.admin);
  console.log("LOGIN STATE", adminState);

  const isAuthenticated = adminState?.isAuthenticated || false;

  const loading = adminState?.loading || false;

  const error = adminState?.error || null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await dispatch(
      loginAdmin({
        email,
        password,
      }),
    );

    console.log("RESULT", result);

    if (loginAdmin.fulfilled.match(result)) {
      navigate("/admin", {
        replace: true,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="
        w-full
        max-w-md
        rounded-3xl
        bg-white
        p-8
        shadow-lg
      "
    >
      <h2 className="mb-8 text-center text-4xl">Admin</h2>

      {error && (
        <div className="mb-4 rounded-xl bg-red-100 p-3 text-red-600">
          {error}
        </div>
      )}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4 w-full rounded-xl border p-4"
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-6 w-full rounded-xl border p-4"
      />

      <button
        type="submit"
        disabled={loading}
        className="
          w-full
          rounded-xl
          bg-[#C86B4A]
          py-4
          text-white
          disabled:opacity-70
        "
      >
        {loading ? "Connexion..." : "Se connecter"}
      </button>
    </form>
  );
};

export default LoginForm;
