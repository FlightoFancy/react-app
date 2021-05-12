import { NavLink } from "react-router-dom";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Профиль
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Диалоги
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/main" activeClassName={s.activeLink}>
          Главная
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>
          Пользователи
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
