import { z } from "zod";

export const invitationSchema = z.object({
  fullName: z.string().min(2, "Nom obligatoire"),

  phone: z.string().min(8, "Téléphone invalide"),

  attendance: z.boolean(),

  message: z.string().optional(),
});
