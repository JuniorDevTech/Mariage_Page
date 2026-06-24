import Invitation from "../models/invitation.model.js";

export const createInvitation = async (data) => {
  const cleanPhone = data.phone.replace(/\s+/g, "");

  const existingInvitation = await Invitation.findOne({
    phone: cleanPhone,
  });

  const invitation = await Invitation.findOneAndUpdate(
    {
      phone: cleanPhone,
    },
    {
      fullName: data.fullName,
      phone: cleanPhone,
      attendance: data.attendance,
      message: data.message,
    },
    {
      upsert: true,
      new: true,
    },
  );

  return {
    invitation,
    isUpdate: !!existingInvitation,
  };
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
