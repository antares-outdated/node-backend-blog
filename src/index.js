import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import PostController from './controllers/PostController';
const Post = new PostController();

const app = express();
mongoose.connect(
  'mongodb://localhost/blog',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/posts', Post.index);
app.post('/newpost', Post.create);
app.get('/posts/:id', Post.read);
app.delete('/posts/:id', Post.delete);
app.patch('/edit/:id', Post.update);

app.listen(3333, () => {
  console.log('SERVER STARTED!');
});
