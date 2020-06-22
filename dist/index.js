'use strict';

var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');

var _require = require('./../models/Post'),
    PostModel = _require.PostModel;

var app = express();
mongoose.connect('mongodb://localhost/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/posts', function (req, res) {
    var data = req.body;

    var newPost = new PostModel({
        title: data.title,
        text: data.text
    });

    newPost.save().then(function () {
        res.send({ status: 'ok' });
    });
});

app.get('/posts', function (req, res) {
    PostModel.find().then(function (err, posts) {
        if (err) {
            return res.send(err);
        }
        res.json(posts);
    });
});

app.delete('/posts/:id', function (req, res) {
    PostModel.remove({
        _id: req.params.id
    }).then(function (post) {
        if (post) {
            res.json({ status: 'deleted' });
        } else {
            res.json({ status: 'error' });
        }
    });
});

app.put('/posts/:id', function (req, res) {
    PostModel.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) {
            return res.send(err);
        } else {
            return res.json({ status: 'update' });
        }
    });
});

app.listen(3333, function (req, res) {
    console.log('SERVER STARTED!');
});