'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require("../models/Post"),
    PostModel = _require.PostModel;

var PostController = function () {
    function PostController() {
        _classCallCheck(this, PostController);
    }

    _createClass(PostController, [{
        key: 'index',
        value: function index(req, res) {
            PostModel.find().then(function (err, posts) {
                if (err) {
                    return res.send(err);
                }
                res.json(posts);
            });
        }
    }, {
        key: 'create',
        value: function create(req, res) {
            var data = req.body;

            var newPost = new PostModel({
                title: data.title,
                text: data.text
            });

            newPost.save().then(function () {
                res.send({ status: 'ok' });
            });
        }
    }, {
        key: 'read',
        value: function read() {
            PostModel.findOne({ _id: req.params.id }).then(function (post) {
                if (!post) {
                    return res.send({ error: 'not found' });
                } else {
                    return res.json(post);
                }
            });
        }
    }, {
        key: 'update',
        value: function update(req, res) {
            PostModel.remove({
                _id: req.params.id
            }).then(function (post) {
                if (post) {
                    res.json({ status: 'deleted' });
                } else {
                    res.json({ status: 'error' });
                }
            });
        }
    }, {
        key: 'delete',
        value: function _delete(req, res) {
            PostModel.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
                if (err) {
                    return res.send(err);
                } else {
                    return res.json({ status: 'update' });
                }
            });
        }
    }]);

    return PostController;
}();