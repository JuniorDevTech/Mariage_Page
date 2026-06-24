import mongoose from "mongoose";

const invitationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    phone: {
      type: String,
      required: true,
    },

    attendance: {
      type: Boolean,
      required: true,
    },

    message: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Invitation", invitationSchema);
