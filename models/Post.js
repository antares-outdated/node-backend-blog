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

const PostModel = mongoose.model('Post', PostSchema);

module.exports = { PostModel }