import React from "react";
import "./ToggleSwitch.css";
import { useGlobalNightModeContext } from "../Context/ContextBody";
import {BsFillMoonFill,BsSun} from "react-icons/bs";
  
const ToggleSwitch = ({ label }) => {
  const {toggle ,setToggle} = useGlobalNightModeContext();

  return (
    <div className="container">
      {   ! toggle ?
          <button onClick={()=>setToggle(!toggle)}>
            <BsFillMoonFill className="moon"/>
          </button>
          :
          <button onClick={()=>setToggle(!toggle)}>
            <BsSun className="sun"/>
          </button>
      }
    </div>
  );
};
  
export default ToggleSwitch;