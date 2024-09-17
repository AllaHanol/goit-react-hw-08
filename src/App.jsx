import {Route, Routes} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import './App.css'
import { lazy,useEffect } from 'react'
import Layout from './components/Layout/Layout'

import { apiRefreshUser} from './redux/auth/operations'
// import { selectAuthIsRefreshing } from './redux/auth/selectors';
import { RestrictedRoute } from './components/RestrictedRoute/RestrictedRouter'
import { PrivateRoute } from './components/PrivateRoute/PrivateRoute'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
 const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))
const ContactsPage = lazy(() => import( './pages/ContactsPage/ContactsPage'));
function App() {
  const dispatch = useDispatch();
  // const isRefreshing = useSelector(selectAuthIsRefreshing);
  

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);
  

//   return isRefreshing ? (<b>User is refreshing, please wait</b>
// ) : (
  return (
  //  <> 
    <Layout>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} />}/>
      <Route path='/login' element={<RestrictedRoute component={<LoginPage />} />}/>
      <Route path='/register' element={<RestrictedRoute component={<RegistrationPage />}/>} />
    </Routes>
    </Layout> 
// </>
  ); 
};

export default App;

