// import mongoose from 'mongoose';
// import PostModel from './../models/Post';
const mongoose = require('mongoose');
const { Post } = require('./../models/Post')

mongoose.connect('mongodb://localhost/blog');

const post = new Post({
    title: "Ho",
    text: "hohohoho"
});

post.save().then(() => {
    console.log("ЭТА ХУНЯ НАКОНЕЦ ТО РАБОТАЕТ!");
});
