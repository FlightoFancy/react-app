import MyPostsContainer from "./myposts/MyPostsContainer";
import s from "./Profile.module.css";
import Profileinfo from "./profileinfo/Profileinfo";

const Profile = ({ profile, status, updateStatus }) => {
  return (
    <div className={s.content}>
      <Profileinfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
