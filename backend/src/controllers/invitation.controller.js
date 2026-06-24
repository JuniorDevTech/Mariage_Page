import * as invitationService from "../services/invitation.service.js";

export const createInvitation = async (req, res) => {
  const invitation = await invitationService.createInvitation(req.body);

  res.status(201).json({
    success: true,
    data: invitation,
  });
};

export const getAllInvitations = async (req, res) => {
  const invitations = await invitationService.getAllInvitations();

  res.status(200).json({
    success: true,
    data: invitations,
  });
};

export const getStats = async (req, res) => {
  const stats = await invitationService.getStats();

  res.status(200).json({
    success: true,
    data: stats,
  });
};
