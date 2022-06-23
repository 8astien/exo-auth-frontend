import React from 'react'
import './Header.css'
import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'

function Header() {
  return (
    <header>
        <img src={logo} alt="Logo de votre boutique" />
        <h1>Votre boutique</h1>
        <img src={cart} alt="Logo du panier" />
    </header>
  )


}

export default Header