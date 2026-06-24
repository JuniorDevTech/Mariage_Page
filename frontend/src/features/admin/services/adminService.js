import api from "../../../service/axios";

export const login = async (payload) => {
  const response = await api.post("/auth/login", payload);

  return response.data;
};

export const getStats = async () => {
  const response = await api.get("/invitations/stats");

  return response.data;
};

export const getInvitations = async () => {
  const response = await api.get("/invitations");

  return response.data;
};
