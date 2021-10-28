import { apiActionTypes } from "api/apiUtils";
import { typeCreator } from "utils/redux";

const { successTag, errorTag } = apiActionTypes;

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = typeCreator(FETCH_POSTS, successTag);
export const FETCH_POSTS_ERROR = typeCreator(FETCH_POSTS, errorTag);

export const GET_POSTS = "GET_POSTS";

export const ADD_POST = "ADD_POST";

export const DELETE_POST = "DELETE_POST";

export const LIKE_POST = "LIKE_POST";

export const DISLIKE_POST = "DISLIKE_POST";
