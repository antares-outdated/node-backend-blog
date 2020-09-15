import PostModel from '../models/Post';


class PostController {
  index(req, res) {
    PostModel.find().then((err, posts) => {
      if (err) {
        return res.send(err);
      }

      return res.json(posts);
    });
  }

  create(req, res) {
    const data = req.body;

    const post = new PostModel({
      title: data.title,
      text: data.text,
      color: data.color,
    });

    post.save().then(() => {
        return res.json(post._id)
    });
  }

  read(req, res) {
    PostModel.findOne({ _id: req.params.id }).then(post => {
      if (!post) {
        return res.send({ error: 'not found' });
      } else {
        return res.json(post);
      }
    });
  }

  update(req, res) {
    PostModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
      if (err) {
        return res.send(err);
      } else {
        return res.json(req.body);
      }
    });
  }

  delete(req, res) {
    PostModel.deleteOne({
      _id: req.params.id,
    }).then(post => {
      if (post) {
        return res.json({ status: 'deleted' })
      } else {
        return res.json({ status: 'error' }
        )
      }
    })
  }
}

export default PostController;
