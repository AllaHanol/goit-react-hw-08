import { NavLink } from 'react-router-dom';
import css from './UserMenu.module.css';
import clsx from "clsx";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthIsLoggedIn, selectAuthIsRefreshing, selectAuthUser } from '../../redux/auth/selectors';
import { apiRefreshUser, apiLogout } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const user = useSelector(selectAuthUser);

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
  const onLogout = () => {
    dispatch(apiLogout());
  }

  if (isRefreshing) return <p>User is refreshing, please wait</p>;
    
  return (
        
    <div>
       <header>
        <nav className={css.nav}>
          <NavLink
            className={({ isActive }) => clsx(css.link, isActive && css.active)}
            to="/"
            >
            Home
          </NavLink>
          {isLoggedIn ? (
              <>
             
              <NavLink
                className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
            }
            to="/contacts"
            >
                Contacts
              </NavLink>
              <div className={css.user}>
                <p>Hello, {user.name}!</p>
                <p>Email: {user.email}</p>
              </div>
              <button type='button' onClick={onLogout}>Logout</button>
            </>

          ) : (
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
          )}
        </nav>
      </header>
    </div>

);
}

export default UserMenu;

// <>
{/* <header className={css.header}>
    <div className={css.wrapper}>
        <nav >
            <ul className={css.nav}>
                <li className={css.link}>
                        <NavLink to="/" className={({isActive})=>{isActive ? css.active : css.link}}>Home</NavLink>
                </li>
                <li className={css.link}>
                        <NavLink to="/contacts" className={({isActive})=>{isActive ? css.active : css.link}}>Contacts</NavLink>
                        </li>
                <div className={css.linkRight}>

                <li className ={css.link}>
                        <NavLink to="/register" className={({isActive})=>{isActive ? css.active : css.link}}>Registration</NavLink>
                </li>
                <li className={css.link}>
                        <NavLink to="/login" className={({isActive})=>{isActive ? css.active : css.link}}>Login</NavLink>
                </li>
                </div>
            </ul>        
        </nav>
    </div>
   
</header> */}
{/* </> */}