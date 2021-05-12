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
        <img src={profile.photos.large} />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default Profileinfo;
