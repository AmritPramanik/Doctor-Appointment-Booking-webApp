import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import Contact from './pages/Contact'
import About from './pages/About'
import MyProfile from './pages/MyProfile'
import MyAppointments from './pages/MyAppointments'
import Appointment from './pages/Appointment'
import Navber from './components/Navber'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navber/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/doctors/:speciality' element={<Doctors/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/my-profile' element={<MyProfile/>}/>
        <Route path='/my-appoinments' element={<MyAppointments/>}/>
        <Route path='/appoinment/:docId' element={<Appointment/>}/>

      </Routes>      
    </div>
  )
}

export default App
