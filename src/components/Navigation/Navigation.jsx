import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css'

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/register">Registration</NavLink>
          </li>
          <li>
            <NavLink to="/login">Log In</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;