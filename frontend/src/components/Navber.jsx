import React, { useState } from 'react'
import {assets} from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Navber = () => {
  
  const navigate = useNavigate();

  const [showMenu,setShowMenu] = useState(false);
  const [token,setToken] = useState(true);

  return (
    <div className='flex  items-center justify-between py-5 mb-5 '>
      <img onClick={()=>navigate('/')} className='w-40 cursor-pointer' src={assets.logo} alt="" />
      <ul className='hidden lg:flex items-start gap-10 px-12 py-2.5 text-[15px] rounded-[30px] shadow-[0_0_30px_0_rgba(0,0,0,0.1)] font-medium'>
        <NavLink to={'/'}>
          <li className='py-1 '>Home</li>
          {/* <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/3 m-auto hidden'/> */}
        </NavLink>
        <NavLink to={'/doctors'}>
          <li className='py-1'>Doctors</li>
          {/* <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-4/4 m-auto hidden'/> */}
        </NavLink>
        <NavLink to={'/appointment'}>
          <li className='py-1'>Appointment</li>
          {/* <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/3 m-auto hidden'/> */}
        </NavLink>
        <NavLink to={'/about'}>
          <li className='py-1'>About</li>
          {/* <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/3 m-auto hidden'/> */}
        </NavLink>
        <NavLink to={'/contact'}>
          <li className='py-1'>Contact</li>
          {/* <hr className='border-none outline-none h-0.5 bg-[#5f6fff] w-3/3 m-auto hidden'/> */}
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
      {
        token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-10 rounded-full' src={assets.profile_pic} alt="" />
              {/* <img className='w-2.5' src={assets.dropdown_icon} alt="" /> */}
              <div className='absolute top-0 right-0 pt-14 text-base  font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rouded flex flex-col gap-4 p-4'>
                  <p onClick={()=>navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                </div>
              </div>
            </div> 
          : <button onClick={()=>navigate('/login')}
            className='primary text-white px-8 py-2 text-[16px] rounded-full cursor-pointer hidden md:block'>
              Login
            </button>
      }
      </div>
    </div>
  )
}


export default Navber
