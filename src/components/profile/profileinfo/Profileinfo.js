import Loader from "../../loader/Loader";
import s from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Profileinfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Loader />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large || 'https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png'} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default Profileinfo;
