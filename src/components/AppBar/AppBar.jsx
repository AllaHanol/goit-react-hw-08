import {AuthNav} from '../AuthNav/AuthNav';  
import {UserMenu} from '../UserMenu/UserMenu';
import {Navigation} from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import {selectAuthIsLoggedIn} from '../../redux/auth/selectors'

import css from './AppBar.module.css';
const AppBar = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation/>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
