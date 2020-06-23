'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _PostController = require('./controllers/PostController');

var _PostController2 = _interopRequireDefault(_PostController);

var _Post = require('./models/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const { PostModel } = require('./models/Post');

var app = (0, _express2.default)(); // const mongoose = require('mongoose');
// const express = require('express');
// const bodyParser = require('body-parser');

_mongoose2.default.connect('mongodb://localhost/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.post('/posts', function (req, res) {
    var data = req.body;

    var newPost = new _Post2.default({
        title: data.title,
        text: data.text
    });

    newPost.save().then(function () {
        res.send({ status: 'ok' });
    });
});

app.get('/posts', function (req, res) {
    _Post2.default.find().then(function (err, posts) {
        if (err) {
            return res.send(err);
        }
        res.json(posts);
    });
});

app.delete('/posts/:id', function (req, res) {
    _Post2.default.remove({
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
    _Post2.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) {
            return res.send(err);
        } else {
            return res.json({ status: 'update' });
        }
    });
});

app.listen(8080, function (req, res) {
    console.log('SERVER STARTED!');
});