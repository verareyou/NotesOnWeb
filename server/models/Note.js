import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
    writer: {
        type: String,
        required: true,
        default: "Anonymous",
    },
    title: {
        type: String,
        required: false,
    },
    content: {
        type: String,
        required: true,
    },
});

const Note = mongoose.model("Note", NoteSchema);

export default Note;