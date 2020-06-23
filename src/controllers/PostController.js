const { PostModel } = require("../models/Post");

class PostController {
    index(req, res) {
        PostModel.find().then((err, posts) => {
            if(err) {
                return res.send(err);
            }
            res.json(posts);
        });
     }

    create(req, res) {
        const data = req.body;
    
        const newPost = new PostModel({
            title: data.title,
            text: data.text
        });
        
        newPost.save().then(() => {
            res.send({ status: 'ok' });
        });
    }

    read() {
        PostModel.findOne({ _id: req.params.id }).then(post => {
            if(!post) {
                return res.send({ error: 'not found' });
            } else {
                return res.json(post);
            }
        })
    }

    update(req, res) {
    PostModel.remove({
        _id: req.params.id
    }).then(post => {
        if(post) {
            res.json({ status: 'deleted' });
        } else {
            res.json({ status: 'error' });
        }
    });
}

    delete(req, res) {
        PostModel.findByIdAndUpdate(req.params.id, {$set: req.body}, (err) => {
            if(err) {
                return res.send(err);
            } else {
                return res.json({ status: 'update' });
            }
        });
    }
}