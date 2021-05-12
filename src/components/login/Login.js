import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/auth-reducer";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/formsControls/formsControls";
import s from "../common/formsControls/formsControls.module.css";

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <div className={s.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={s.fieldLogin}>
          <Field
            type="text"
            name="email"
            placeholder="Email"
            component={Input}
            validate={[required]}
          />
        </div>
        <div className={s.fieldLogin}>
          <Field
            type="password"
            name="password"
            placeholder="Password"
            component={Input}
            validate={[required]}
          />
        </div>
        <span className={s.formCheck}>
          <Field type="checkbox" name="rememberMe" component={Input} />
          <span className={s.checkboxText}>remember me</span>
        </span>

        <div className={s.buttonLoginBlock}>
          {error && <div className={s.formSummaryError}>{error}</div>}
          <button className={s.buttonLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};
const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
