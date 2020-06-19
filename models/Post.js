// import mongoose, { Schema } from 'mongoose';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema(
    {
        title: String,
        text: String
    },
    {
        timestamps: true
    }
);

const Post = mongoose.model('Post', PostSchema);

module.exports = { Post }

// export default Post;