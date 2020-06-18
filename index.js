import mongoose from 'mongoose';
import PostModel from './../models/Post';

mongoose.connect('mongodb://localhost/blog');

const post = new PostModel({
    title: "Ho",
    text: "hohohoho"
});

post.save().then(() => {
    console.log("ОК");
});

