import React from 'react'
import "./Card.css"
import { useGlobalNightModeContext } from '../Context/ContextBody'

const Card = ({image, author, publishedAt, name, description, url}) => {

  const {color} = useGlobalNightModeContext();

  return (
    <div className="card" style={{ backgroundColor : `${color["card"]}` }}>
        <h1><a href={`${url}`} style = {{color :`${color["tc"]}`}}>{description}</a></h1>
        <div className="card__image">
          <a href = {`${url}`}><img className="image" src={`${image}`} /></a>
        </div>
        <div className="card__copy" style={{color :`${color["tc"]}`}}>
            {author ? <h2>Author : {author}</h2> : <h2></h2>}
            <h2>Time : {publishedAt}</h2>
            <h2 className=''>{name}</h2>
        </div>
    </div>
  )
}

export default Card;