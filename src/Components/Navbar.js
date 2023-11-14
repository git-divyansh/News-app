import React, { useState } from 'react'
import './Navbar.css'
import ToggleSwitch from './ToggleSwitch'
import { useGlobalNightModeContext } from '../Context/ContextBody'

const Navbar = () => {
  const {toggle} = useGlobalNightModeContext();
  return (
    <div className='navbar' style = {{borderBottom : `${toggle ? " solid #303030" : ""}`}}>
        <div className='heading'>NEWS DAILY</div>
        <div className='toggle-switch'>
          <ToggleSwitch 
            label={'D'}
          />
        </div>
    </div>
  )
}

export default Navbar