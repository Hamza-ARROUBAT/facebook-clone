import { apiActionTypes } from "api/apiUtils";
import { typeCreator } from "utils/redux";

const { successTag, errorTag } = apiActionTypes;

export const FETCH_USERS = "FETCH_USERS";
export const FETCH_USERS_SUCCESS = typeCreator(FETCH_USERS, successTag);
export const FETCH_USERS_ERROR = typeCreator(FETCH_USERS, errorTag);

export const GET_USERS = "GET_USERS";

export const ADD_USER = "ADD_USER";

export const DELETE_USER = "DELETE_USER";

export const LIKE_USER = "LIKE_USER";

export const DISLIKE_USER = "DISLIKE_USER";
