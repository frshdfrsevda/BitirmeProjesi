import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './index.css'
import styles from './components/Navbar'

import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Registraion from './pages/Registration'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointment from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navbar from './components/Navbar'
import Login from './pages/Login'
import Footer from './components/Footer'
import Admin from './pages/AdminLogin'
import UserList from './pages/UserList';
import AdminDashboard from './pages/AdminDashboard';




const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      
      <Navbar />  
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/doctors' element={< Doctors/>} />
        <Route path='/doctors/:speciality' element={< Doctors/>} />
        <Route path='/AdminLogin' element={<Admin/>} />
        <Route path='/registration' element={< Registraion/>} />
        <Route path='UserList' element={<UserList/>} />
        <Route path='/login' element={<Login />}/>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path='/about' element={< About/>} />
        <Route path='/contact' element={< Contact/>} />
        <Route path='/my-profile' element={< MyProfile/>} />
        <Route path='/my-appointments' element={< MyAppointment/>} />
        <Route path='/appointment/:docId' element={< Appointment/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App