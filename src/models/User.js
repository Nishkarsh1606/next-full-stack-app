import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        required: true,
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true })

export default mongoose.models.User || mongoose.model("User", userSchema)