
import {Route, Routes} from 'react-router-dom'

import './App.css'
import { lazy,Suspense } from 'react'
import Header from './components/Header/Header'

const HomePage = lazy(() => import('./pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage'))
const RegistrationPage = lazy(() => import('./pages/RegistrationPage/RegistrationPage'))
function App() {
  

  return (
    <>
    <Header />
    <Suspense fallback={<h1>Loading</h1>}>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegistrationPage />} />
     
    </Routes>
    
    </Suspense>
    
    </>
  )
}

export default App
