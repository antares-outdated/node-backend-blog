import mongoose from 'mongoose';
import { Schema } from 'mongoose'; 

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

export default PostModel;