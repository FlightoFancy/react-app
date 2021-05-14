import MyPostsContainer from "./myposts/MyPostsContainer";
import s from "./Profile.module.css";
import Profileinfo from "./profileinfo/Profileinfo";

const Profile = ({ profile, status, updateStatus, isOwner, savePhoto,saveProfile }) => {
  return (
    <div className={s.content}>
      <Profileinfo
        isOwner={isOwner}
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        savePhoto={savePhoto}
        saveProfile={saveProfile}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
