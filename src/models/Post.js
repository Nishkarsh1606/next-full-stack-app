import mongoose from "mongoose";

const { Schema } = mongoose

const PostSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    }
}, { timestamps: true });

// { timestamps: true }

export default mongoose.models.Post || mongoose.model('Posts', PostSchema)