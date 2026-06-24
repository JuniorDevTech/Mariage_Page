import Invitation from "../models/invitation.model.js";

export const createInvitation = async (data) => {
  return await Invitation.create(data);
};

export const getAllInvitations = async () => {
  return await Invitation.find().sort({
    createdAt: -1,
  });
};

export const getStats = async () => {
  const invitations = await Invitation.find();

  const total = invitations.length;

  const present = invitations.filter((item) => item.attendance === true).length;

  const absent = invitations.filter((item) => item.attendance === false).length;

  return {
    total,
    present,
    absent,
  };
};
