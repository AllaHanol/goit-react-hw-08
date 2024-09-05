import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
import clsx from "clsx";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuthIsLoggedIn, selectAuthIsRefreshing, selectAuthUser } from '../../redux/auth/selectors';
import { apiRefreshUser } from '../../redux/auth/operations';
const Header = () => {
 const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);
  const user = useSelector(selectAuthUser);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

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
            to="/posts"
            >
                Posts
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
            }
            to="/context-example"
            >
                Context Example
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
            }
            to="/contacts"
            >
                Contacts
              </NavLink>
              <div>
                <p>Hello, {user.name}!</p>
                <p>Email: {user.email}</p>
              </div>
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

export default Header;

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