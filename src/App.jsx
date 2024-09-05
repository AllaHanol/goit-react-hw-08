
import {Route, Routes} from 'react-router-dom'
import { useDispatch} from 'react-redux';
import './App.css'
import { lazy,Suspense,useEffect } from 'react'
import Header from './components/Header/Header'


import { apiRefreshUser } from './redux/auth/operations'
// import Layout from './components/Layout/Layout'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))
const ContactsPage = lazy(() => import( './pages/ContactsPage/ContactsPage'));
function App() {
  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(apiRefreshUser());
  }, [dispatch]);

  

  return (
    <>
    <Header />
    {/* <Layout> */}
    <Suspense fallback={<h1>Loading</h1>}>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path="/contacts" element={<ContactsPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegistrationPage />} />
     
    </Routes>
    
    </Suspense>

    {/* </Layout> */}

    
    </>
  )
}

export default App
