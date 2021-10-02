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
},{
    writeConcern: {
        w: 'majority',
        j: true,
        wtimeout: 1000
      }
});

const Post = mongoose.model("Post",postSchema);

module.exports = Post;