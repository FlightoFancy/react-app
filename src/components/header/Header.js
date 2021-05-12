import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <div className={s.logoBlock}>
        <img
          src="https://st2.depositphotos.com/4398873/7993/v/950/depositphotos_79934552-stock-illustration-retro-cinema-logo.jpg"
          alt=""
        />
      </div>
      <h1 className={s.headerH1}>КИНЕМАТОГРАФИК</h1>

      <div className={s.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} <button className={s.buttonLogin} onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"/login"}><button className={s.buttonLogin}>Login</button> </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
