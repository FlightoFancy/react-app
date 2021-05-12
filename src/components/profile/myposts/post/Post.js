import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <img
        src="https://pristor.ru/wp-content/uploads/2019/09/%D0%90%D0%BD%D0%B8%D0%BC%D0%B5-%D0%B4%D0%BB%D1%8F-%D0%BF%D0%B0%D1%80%D0%BD%D0%B5%D0%B9-%D0%B0%D0%B2%D0%B0-%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B5-%D1%84%D0%BE%D1%82%D0%BA%D0%B8-24.jpg"
        alt=""
      />
      <span className={s.postText}> {props.message} </span>
     
      <div className={s.postLike}>like {props.likesCount}</div>
    </div>
  );
};

export default Post;
