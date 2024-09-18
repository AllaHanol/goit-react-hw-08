
import css from './UserMenu.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {  selectAuthUser } from '../../redux/auth/selectors';
import {  apiLogout } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  // const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  
  const user = useSelector(selectAuthUser);
  const onLogout = () => {
    dispatch(apiLogout());
  }
    
  return (
        
    <div>
       
              <div className={css.user}>
                <p>Hello, {user.name}!</p>
                <p>Email: {user.email}</p>
              </div>
              <button type='button' onClick={onLogout}>Logout</button>
          
          
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