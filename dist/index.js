'use strict';

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _PostController = require('./controllers/PostController');

var _PostController2 = _interopRequireDefault(_PostController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Post = new _PostController2.default();

var app = (0, _express2.default)();
_mongoose2.default.connect('mongodb://localhost/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_bodyParser2.default.json());

app.post('/posts', Post.create);
app.get('/posts', Post.index);
app.delete('/posts/:id', Post.delete);
app.get('/posts/:id', Post.read);
app.put('/posts/:id', Post.update);

app.listen(8080, function (req, res) {
    console.log('SERVER STARTED!');
});