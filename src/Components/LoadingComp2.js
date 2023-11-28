import React from 'react'
import "./Loading_comp2.css"
import Skeleton_card from './Skeleton_card'

const Loadingcomp2 = () => {

  return (
    <div className='skeleton' style={{color: "white"}}>
        <Skeleton_card />
        <Skeleton_card />
        <Skeleton_card />
        <Skeleton_card />
        <Skeleton_card />
        <Skeleton_card />
    </div>
  )
}

export default Loadingcomp2
