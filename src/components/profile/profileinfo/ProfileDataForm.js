import { Field, reduxForm } from "redux-form";
import { required } from "../../../utils/validators/validators";
import { Input, Textarea } from "../../common/formsControls/formsControls";
import s from "./Profileinfo.module.css";


const ProfileDataForm = ({ handleSubmit, profile,error }) => {
  return (
    <form onSubmit={handleSubmit}>
        <div>
          <button>save</button>
        </div>
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <b>Full name</b>:
        <Field
          type="text"
          name="fullName"
          placeholder="Full name"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <b>Looking for a job</b>:
        <Field type="checkbox" name="lookingForAJob" component={Input} />
      </div>

      <div>
        <b>My professional skills</b>:
        <Field
          type="text"
          name="lookingForAJobDescription"
          placeholder="My professional skills"
          component={Textarea}
          validate={[required]}
        />
      </div>

      <div>
        <b>About me</b>:
        <Field
          type="text"
          name="aboutMe"
          placeholder="About me"
          component={Textarea}
          validate={[required]}
        />
      </div>
      <div>
        <b>Contacts</b>:
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={s.contact}>
              <b>{key}</b>:
              <Field
                type="text"
                name={"contacts." + key}
                placeholder={key}
                component={Input}
                
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};
const ProfileDataFormRedux = reduxForm({ form: "edit-profile" })(
  ProfileDataForm
);
export default ProfileDataFormRedux;
