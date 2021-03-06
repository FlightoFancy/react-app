import { useState } from "react";
import Loader from "../../loader/Loader";
import ProfileDataForm from "./ProfileDataForm";
import s from "./Profileinfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const Profileinfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  savePhoto,
  saveProfile,
}) => {
  let [editMode, setEditMode] = useState(false);

  if (!profile) {
    return <Loader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div className={s.containerProfileinfo}>
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
      </div>

      <div className={s.profileData}>
        {editMode ? (
          <ProfileDataForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={profile}
            isOwner={isOwner}
          />
        )}
      </div>
      <div className={s.status}>
       
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
  return (
    <div className={s.profileDataBlock}>
      {isOwner && (
        <div>
          <button className={s.buttonEdit} onClick={goToEditMode}>
            Редактировать
          </button>
        </div>
      )}
      <div>
        <b>Full name</b>: {profile.fullName}
      </div>
      <div>
        <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>My professional skills</b>: {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>About me</b>: {profile.aboutMe}
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <Contact
              key={key}
              contactTitle={key}
              contactValue={profile.contacts[key]}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactTitle}</b>: {contactValue}
    </div>
  );
};

export default Profileinfo;
