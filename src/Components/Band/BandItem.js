import React from 'react'

function BandItem(props) {
  return (
    <div className="band--item">
        <img src={props.img} alt="Illustration liée à votre produit" />
        <p>{props.text}</p>
    </div>
  )
}

export default BandItem