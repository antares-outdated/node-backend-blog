import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import PostController from './controllers/PostController';
const Post = new PostController();

const app = express();
mongoose.connect('mongodb://localhost/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/posts', Post.create);
app.get('/posts', Post.index);
app.delete('/posts/:id', Post.delete);
app.get('/posts/:id', Post.read);
app.put('/posts/:id', Post.update);

app.listen(8080, (req, res) => {
    console.log('SERVER STARTED!');
});
