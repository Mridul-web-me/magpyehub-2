import React from 'react'
import Nav from './Nav/Nav'
import './Header.css'
import HeaderTop from './HeaderTop/HeaderTop'

const Header = () => {

    // console.log(props.cart);
    return (
        <div className="menu sticky-top">
            <HeaderTop></HeaderTop>
            <Nav></Nav>
        </div>
    )
}

export default Header







