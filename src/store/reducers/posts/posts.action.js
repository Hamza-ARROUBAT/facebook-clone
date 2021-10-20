import {
  ADD_POST,
  DELETE_POST,
  DISLIKE_POST,
  FETCH_POSTS,
  GET_POSTS,
  LIKE_POST
} from "./posts.types";

export const getPosts = () => ({
  type: GET_POSTS
});

export const addPost = (post) => ({
  type: ADD_POST,
  post
});

export const deletePost = (id) => ({
  type: DELETE_POST,
  id
});

export const likePost = (id) => ({
  type: LIKE_POST,
  id
});

export const dislikePost = (id) => ({
  type: DISLIKE_POST,
  id
});
