import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser';

import PostController from './controllers/PostController';
import PostModel from './models/Post'

const app = express();
mongoose.connect('mongodb://localhost/blog', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/posts', (req, res) => {
    const data = req.body;

    const newPost = new PostModel({
        title: data.title,
        text: data.text
    });
    
    newPost.save().then(() => {
        res.send({ status: 'ok' });
    });
});

app.get('/posts', (req, res) => {
   PostModel.find().then((err, posts) => {
       if(err) {
           return res.send(err);
       }
       res.json(posts);
   });
});

app.delete('/posts/:id', (req, res) => {
    PostModel.remove({
        _id: req.params.id
    }).then(post => {
        if(post) {
            res.json({ status: 'deleted' });
        } else {
            res.json({ status: 'error' });
        }
    });
});

app.put('/posts/:id', (req, res) => {
    PostModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
        if(err) {
            return res.send(err);
        } else {
            return res.json({ status: 'update' });
        }
    });
});

app.listen(8080, (req, res) => {
    console.log('SERVER STARTED!');
});
