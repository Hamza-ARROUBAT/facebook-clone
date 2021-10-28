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

      draft.data = currentDraft.data.map((post) => {
        if (post.id === action.id) {
          if (!post.likedBy.includes(action.userId)) {
            const newPost = {
              ...post,
              likes: post.likes + 1,
              likedBy: [...post.likedBy, action.userId]
            };
            return newPost;
          } else {
            if (post.likedBy.length === 1) {
              const newPost = {
                ...post,
                likes: post.likes - 1,
                likedBy: []
              };
              return newPost;
            } else {
              const targetIndex = post.likedBy.findIndex(
                (id) => id === action.userId
              );
              const newPost = {
                ...post,
                likes: post.likes - 1,
                likedBy: post.likedBy.splice(targetIndex, 1)
              };
              return newPost;
            }
          }
        } else {
          return post;
        }
      });

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
