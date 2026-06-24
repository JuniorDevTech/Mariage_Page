import { Router } from "express";

import {
  createInvitation,
  getAllInvitations,
  getStats,
} from "../controllers/invitation.controller.js";

import { validate } from "../middlewares/validate.middleware.js";
import { protect } from "../middlewares/auth.middleware.js";
import { invitationSchema } from "../validations/invitation.validation.js";

const router = Router();

router.post("/", validate(invitationSchema), createInvitation);

router.get("/", protect, getAllInvitations);

router.get("/stats", protect, getStats);

export default router;
