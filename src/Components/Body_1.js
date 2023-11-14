import React from 'react'
import './Body_1.css'
import { useGlobalNightModeContext } from '../Context/ContextBody'
const Body_1 = ({setCategory}) => {
  const {color} = useGlobalNightModeContext()
  return (
    <div className='Body_1'>
      <div className='news-type'>
        <div className='sports' onClick={()=>setCategory("sports")}>SPORTS</div>
        <div className='technology' onClick={()=>setCategory("technology")}>TECHNOLOGY</div>
        <div className='buisness' onClick={()=>setCategory("buisness")}>BUISNESS</div>
        <div className='entertainment' onClick={()=>setCategory("entertainment")}>ENTERTAINMENT</div>
        <div className='india' onClick={()=>setCategory("in")}>INDIA</div>
      </div>
      <div className='line' style={{backgroundColor : `${color["tc"]}`,  borderColor : `${color["tc"]}`}}></div>
    </div>
  )
}

export default Body_1