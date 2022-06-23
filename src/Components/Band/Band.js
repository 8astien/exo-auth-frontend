import React from 'react'
import './Band.css'
import BandItem from './BandItem'
import spa from '../../assets/spa.svg'
import eco from '../../assets/eco.svg'
import recycling from '../../assets/recycling.svg'

function Band(props) {
  return (
    <div className="upper--band">
        <BandItem 
            img = {spa}
            text = 'Recette 100% Bio'
        />
        <BandItem 
            img = {eco}
            text = '100% Fruits Frais'
        />
        <BandItem 
            img = {recycling}
            text = 'Bouteille 100% Bio-dégradable'
        />
    </div>
  )
}

export default Band