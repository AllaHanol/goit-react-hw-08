import {NavLink} from 'react-router-dom';
import css from './AuthNav.module.css';
import clsx from "clsx";

export const AuthNav = () => {
    return (

<>
              <NavLink
                className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
            }
            to="/login"
            >
                Login
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
            }
            to="/register"
            >
                Register
              </NavLink>
            
</>
    )
   
  };
  
  export default AuthNav;
  