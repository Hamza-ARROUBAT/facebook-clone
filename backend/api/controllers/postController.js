const Post = require('../models/Post');
const postService = require('../services/postService');

const fetch_all_posts = (req, res) => {
  Post.find()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

const add_post = (req, res) => {
  postService
    .createPost(req)
    .then((post) => {
      res.send(post);
    })
    .catch((err) => console.log('createPost error', err));
};

const change_post = (req, res) => {
  const id = req.body.post.id;
  const status = req.body.post.status;

  Post.findOne({ id: id })
    .then((post) => {
      post.status = status;
      post
        .save()
        .then((result) => res.status(200).json(result))
        .catch((err) => console.error(err));
    })
    .catch((err) => {
      console.error(err);
    });
};

const delete_post = (req, res) => {
  const id = req.params.id;
  Post.findOneAndDelete({ id: id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
    });
};

module.exports = {
  fetch_all_posts,
  add_post,
  change_post,
  delete_post,
};
