import React from 'react'
import {assets} from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Navber = () => {
  return (
    <div>
      <img src={assets.logo} alt="" />
      <ul>
        <NavLink></NavLink>
      </ul>
      <button></button>
    </div>
  )
}


export default Navber
