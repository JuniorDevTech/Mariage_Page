import express from "express";
import cors from "cors";

import invitationRoutes from "./routes/invitation.routes.js";
import authRoutes from "./routes/auth.routes.js";

import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/invitations", invitationRoutes);

app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;
