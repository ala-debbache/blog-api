const mongoose = require("mongoose");
const {Schema} = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required:true
    },
    tags: [String],
    date: {
        type: Date,
        default: Date.now
    },
});

const Post = mongoose.model("Post",postSchema);

module.exports = Post;