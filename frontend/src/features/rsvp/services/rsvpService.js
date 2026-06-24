import api from "../../../service/axios";

export const createInvitation = async (payload) => {
  const response = await api.post("/invitations", payload);

  return response.data;
};
