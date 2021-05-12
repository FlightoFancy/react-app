import { profileAPI } from "../api/api";

let add_post = "ADD-POST";
let SET_USER_PROFILE = "SET_USER_PROFILE";
let SET_STATUS = "SET_STATUS";
let DELETE_POST = "DELETE_POST";

let initialState = {
  posts: [
    { id: 1, message: "Привет мир!", likesCount: 10 },
    { id: 2, message: "Как дела?", likesCount: 17 },
  ],
  profile: null,
  status: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_post:

      let newPost = {
        id: 6,
        message: action.newPostText,
        likesCount: 5,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: " ",
      };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    case SET_STATUS:
      return { ...state, status: action.status };
case DELETE_POST:
  return { ...state, posts: state.posts.filter(p=>p.id!=action.postId) };
    default:
      return state;
  }
};
export const addPostActionCreator = (newPostText) => {
  return {
    type: add_post,
    newPostText,
  };
};
export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};
export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default profileReducer;
