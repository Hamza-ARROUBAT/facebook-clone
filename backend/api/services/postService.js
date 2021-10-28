const Post = require('../models/Post');
const generator = require('../utils/generator');

const createPost = async (req) => {
  const postData = req.body;

  const newPost = new Post({
    id: generator.id(),
    ...postData,
  });

  return newPost.save();
};

module.exports = {
  createPost,
};
