import jwt from "jsonwebtoken";

export const loginAdmin = async (email, password) => {
  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    throw new Error("Email ou mot de passe incorrect");
  }

  const token = jwt.sign(
    {
      email,
      role: "admin",
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    },
  );

  return {
    token,
  };
};
