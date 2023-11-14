import {React, createContext, useContext, useEffect, useState} from 'react'

const GlobalNightModeContext = createContext();

export const GlobalNightModeProvider = ({children}) => {

    const [toggle, setToggle] = useState(true);
    const [color, setColor] = useState({
        "bg" : "#171717",
        "tc" : "white",
        "card" : "#171717"
    });
    useEffect(()=>{
        if(toggle === false){
            setColor(values => ({...values, ["bg"]: "#F4F0E0"}));
            setColor(values => ({...values, ["tc"]: "black"}));
            setColor(values => ({...values, ["card"]: "#F4F0E0"}));
        }
        else{
            setColor(values => ({...values, ["bg"]: "#171717"}));
            setColor(values => ({...values, ["tc"]: "white"}));
            setColor(values => ({...values, ["card"]: "#171717"}));
        }
    },[toggle])

  return (
    <GlobalNightModeContext.Provider
        value = {{
            toggle,
            setToggle,
            color
        }}
    >
        {children}
    </GlobalNightModeContext.Provider>
  )
}

export const useGlobalNightModeContext = () =>{
    return useContext(GlobalNightModeContext);
}