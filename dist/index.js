'use strict';

// import mongoose from 'mongoose';
// import PostModel from './../models/Post';
var mongoose = require('mongoose');

var _require = require('./../models/Post'),
    Post = _require.Post;

mongoose.connect('mongodb://localhost/blog');

var post = new Post({
    title: "Ho",
    text: "hohohoho"
});

post.save().then(function () {
    console.log("ЭТА ХУНЯ НАКОНЕЦ ТО РАБОТАЕТ! УРААААААААААААААА ТАНЦУЙ КАК БУДТО ВЕНА АААААА УРАААА НАХУЙ БЛЯТЬ НАКОНЕЦТО ПИЗДЕЦ ВОТ ЭТО ДА КОНЕЧНО Я СЧАСТЛИВА ЧЕСТНО");
});