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
    },
    uid: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });

export default mongoose.models.Blogs || mongoose.model('Blogs', PostSchema)