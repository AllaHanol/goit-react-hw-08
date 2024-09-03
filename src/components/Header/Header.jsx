import { NavLink } from 'react-router-dom';
import css from './Header.module.css';
const Header = () => {
    return (
        <>
        <header className={css.header}>
            <div>
                <nav>
                    <ul>
                        <li>
                                <NavLink to="/" className={({isActive})=>{isActive ? css.active : css.link}}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/register" className={({isActive})=>{isActive ? css.active : css.link}}>Registration</NavLink>
                            </li>
                            <li>
                                <NavLink to="/login" className={({isActive})=>{isActive ? css.active : css.link}}>Login</NavLink>
                            </li>
                    </ul>        
                </nav>
            </div>
           
        </header>
        </>
    );
};

export default Header;