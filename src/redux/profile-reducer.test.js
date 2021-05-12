import profileReducer, { addPostActionCreator, deletePost } from "./profile-reducer";

let state = {
  posts: [
    { id: 1, message: "Привет мир!", likesCount: 10 },
    { id: 2, message: "Как дела?", likesCount: 17 },
    { id: 3, message: "Yo", likesCount: 3 }
  ],
};

it("length of posts should be incremented", () => {
  let action = addPostActionCreator("ffff");

  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(4);
});
it("message of new post should be correct", () => {
  let action = addPostActionCreator("ffff");
  let newState = profileReducer(state, action);

  expect(newState.posts[3].message).toBe("ffff");
});
it("after deleting length of message should be decrement", () => {
  let action = deletePost(1);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});
it("after deleting length  shouldn't be decrement if id is incorrect", () => {
  let action = deletePost(1000);
  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(2);
});