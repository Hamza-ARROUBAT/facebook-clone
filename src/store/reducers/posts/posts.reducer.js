import produce, { current } from "immer";
import {
  ADD_POST,
  DELETE_POST,
  DISLIKE_POST,
  FETCH_POSTS_SUCCESS,
  GET_POSTS,
  LIKE_POST
} from "./posts.types";

const initialState = {
  isLoading: true,
  data: [],
  likedPosts: [],
  dislikedPosts: []
};

const cardsReducer = produce((draft, action) => {
  // globals
  const currentDraft = current(draft);

  // switch
  switch (action.type) {
    case GET_POSTS:
      draft.isLoading = true;
      // draft.data = action.payload;
      draft.isLoading = false;
      break;

    case ADD_POST:
      draft.isLoading = true;
      draft.data = [action.post, ...currentDraft.data];
      draft.isLoading = false;
      break;

    case DELETE_POST:
      draft.isLoading = true;
      draft.data = currentDraft.data.filter((data) => data.id !== action.id);
      draft.isLoading = false;
      break;

    case LIKE_POST:
      draft.isLoading = true;

      if (!currentDraft.likedPosts.includes(action.id)) {
        draft.data = currentDraft.data.map((post) => {
          if (post.id === action.id) {
            const newPost = { ...post, likes: post.likes + 1 };
            return newPost;
          } else {
            return post;
          }
        });
        draft.likedPosts = [...currentDraft.likedPosts, action.id];
      } else {
        draft.data = currentDraft.data.map((post) => {
          if (post.id === action.id) {
            const newPost = { ...post, likes: post.likes - 1 };
            return newPost;
          } else {
            return post;
          }
        });

        draft.likedPosts = currentDraft.likedPosts.filter(
          (id) => id !== action.id
        );
      }
      draft.isLoading = false;
      break;

    case DISLIKE_POST:
      draft.isLoading = true;

      if (!currentDraft.dislikedPosts.includes(action.id)) {
        draft.data = currentDraft.data.map((post) => {
          if (post.id === action.id) {
            const newPost = { ...post, dislikes: post.dislikes + 1 };
            return newPost;
          } else {
            return post;
          }
        });
        draft.dislikedPosts = [...currentDraft.dislikedPosts, action.id];
      } else {
        draft.data = currentDraft.data.map((post) => {
          if (post.id === action.id) {
            const newPost = { ...post, dislikes: post.dislikes - 1 };
            return newPost;
          } else {
            return post;
          }
        });

        draft.dislikedPosts = currentDraft.dislikedPosts.filter(
          (id) => id !== action.id
        );
      }
      draft.isLoading = false;
      break;

    default:
      break;
  }
}, initialState);

export default cardsReducer;
