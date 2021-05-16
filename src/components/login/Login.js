import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formsControls/formsControls";
import s from "../common/formsControls/formsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit} className={s.formContainer}>
      <div className={s.fieldLogin}>
        <Field
          type="text"
          name="email"
          placeholder="Email"
          component={Input}
          validate={[required]}
        />
      </div>
      <div className={s.fieldPass}>
        <Field
          type="password"
          name="password"
          placeholder="Password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div className={s.formCheck}>
        <div className={s.checkbox}>
          {" "}
          <Field type="checkbox" name="rememberMe" component={Input} />{" "}
        </div>
        <div className={s.checkboxText}>Запомнить меня</div>
      </div>
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && (
        <Field
          type="text"
          name="captcha"
          placeholder="Symbols from image"
          component={Input}
          validate={[required]}
        />
      )}
      <div className={s.buttonLoginBlock}>
        {error && <div className={s.formSummaryError}>{error}</div>}
        <button className={s.buttonLogin}>Войти</button>
      </div>
    </form>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha
    );
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
