import s from "./MyPosts.module.css";
import React from "react";
import Post from "./post/Post";
import { Field, reduxForm } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/formsControls/formsControls";

let maxLength10 = maxLengthCreator(10);
const MyPosts = (props) => {
   let postsElement = props.posts.map((p) => (
    <Post message={p.message} id={p.id} likesCount={p.likesCount} />
  ));
  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.myposts}>
      <div>
        <h3>Мои посты</h3>
      </div>
      <AddMyReduxPostForm onSubmit={onAddPost} />
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};
const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className={s.form}>
      <Field
        name="newPostText"
        component={Textarea}
        cols="30"
        rows="2"
        validate={[required, maxLength10]}
        placeholder="Post message"
      />
      <div>
        <button>Добавить пост</button>
      </div>
    </form>
  );
};
const AddMyReduxPostForm = reduxForm({ form: "profileAddNewPostForm" })(
  AddNewPostForm
);

export default MyPosts;
