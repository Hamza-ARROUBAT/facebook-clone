import produce, { current } from "immer";
import {
  ADD_USER,
  DELETE_USER,
  DISLIKE_USER,
  FETCH_USERS_SUCCESS,
  GET_USERS,
  LIKE_USER
} from "./user.types";

const initialState = {
  isLoading: true,
  data: {
    id: '185648',
    firstName: 'Hamza',
    lastName: 'ARROUBAT',
  }
};

const userReducer = produce((draft, action) => {
  // globals
  const currentDraft = current(draft);

  // switch
  switch (action.type) {
    default:
      break;
  }
}, initialState);

export default userReducer;
