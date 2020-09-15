'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Post = require('../models/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PostController = function () {
  function PostController() {
    _classCallCheck(this, PostController);
  }

  _createClass(PostController, [{
    key: 'index',
    value: function index(req, res) {
      _Post2.default.find().then(function (err, posts) {
        if (err) {
          return res.send(err);
        }

        return res.json(posts);
      });
    }
  }, {
    key: 'create',
    value: function create(req, res) {
      var data = req.body;

      var post = new _Post2.default({
        title: data.title,
        text: data.text,
        color: data.color
      });

      post.save().then(function () {
        return res.json(post._id);
      });
    }
  }, {
    key: 'read',
    value: function read(req, res) {
      _Post2.default.findOne({ _id: req.params.id }).then(function (post) {
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
      _Post2.default.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err) {
        if (err) {
          return res.send(err);
        } else {
          return res.json(req.body);
        }
      });
    }
  }, {
    key: 'delete',
    value: function _delete(req, res) {
      _Post2.default.deleteOne({
        _id: req.params.id
      }).then(function (post) {
        if (post) {
          return res.json({ status: 'deleted' });
        } else {
          return res.json({ status: 'error' });
        }
      });
    }
  }]);

  return PostController;
}();

exports.default = PostController;