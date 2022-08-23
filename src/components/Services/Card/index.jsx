import React from 'react'

const Card = (props) => {
  return (
    <div key={props.index} >
      <img src={props.img} alt='rasm'/>
      <h5>{props.title}</h5>
      <p>{props.about}</p>
    </div>
  )
}

export default Card