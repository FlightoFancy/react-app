import Loader from "../../loader/Loader";
import s from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Profileinfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <Loader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img
          src={
            profile.photos.large ||
            "https://i.pinimg.com/originals/8a/eb/d8/8aebd875fbddd22bf3971c3a7159bdc7.png"
          }
        />
        {isOwner && (
          <div className={s.fileUpload}>
            <input
              type={"file"}
              className={s.upload}
              onChange={onMainPhotoSelected}
            />

            <span>Загрузить</span>
          </div>
        )}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default Profileinfo;
