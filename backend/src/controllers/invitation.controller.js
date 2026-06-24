import * as invitationService from "../services/invitation.service.js";

export const createInvitation = async (req, res) => {
  try {
    const result = await invitationService.createInvitation(req.body);

    res.status(200).json({
      success: true,
      data: result.invitation,
      message: result.isUpdate
        ? "❤️ Votre réponse a été mise à jour."
        : "❤️ Votre présence a été enregistrée.",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
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
