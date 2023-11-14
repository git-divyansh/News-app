import React from 'react'
import './Loading_comp2.css'
import { useGlobalNightModeContext } from '../Context/ContextBody';

const Skeleton_card = () => {

    const {color} = useGlobalNightModeContext();

  return (
    <div>
        <div className="skeleton-card" style={{backgroundColor : `${color["bg"]}`}}>
            <h1>
                <div className="skeleton-body"></div>
                <div className="skeleton-body"></div>
                <div className="skeleton-body"></div>
                <div className="skeleton-body"></div>
                <div className="skeleton-body"></div>
                <div className="skeleton-body"></div>
            </h1>
            <div className="skeleton__image"></div>
            <h1 >
                <div className="skeleton-body"></div>
                <div className="skeleton-body"></div>
                <div className="skeleton-body"></div>
            </h1>
        </div>
    </div>
  )
}

export default Skeleton_card