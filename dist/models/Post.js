'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
var PostSchema = new _mongoose.Schema({
    title: String,
    text: String
}, {
    timestamps: true
});

var PostModel = _mongoose2.default.model('Post', PostSchema);

// module.exports = { PostModel }
exports.default = PostModel;