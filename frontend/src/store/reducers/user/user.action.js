import {
  ADD_USER,
  DELETE_USER,
  DISLIKE_USER,
  FETCH_USERS,
  GET_USERS,
  LIKE_USER
} from "./user.types";

export const getUsers = () => ({
  type: GET_USERS
});

export const addUser = (post) => ({
  type: ADD_USER,
  post
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  id
});

export const likeUser = (id) => ({
  type: LIKE_USER,
  id
});

export const dislikeUser = (id) => ({
  type: DISLIKE_USER,
  id
});
