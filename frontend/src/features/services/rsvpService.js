import api from "../../service/axios";

export const createInvitation = async (payload) => {
  const response = await api.post("/invitations", payload);

  return response.data;
};

export const getInvitations = async () => {
  const response = await api.get("/invitations");

  return response.data;
};

export const getStats = async () => {
  const response = await api.get("/invitations/stats");

  return response.data;
};
