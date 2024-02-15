import React, { useState } from 'react'
// import {Link} from 'react-router-dom'
import { GiHamburgerMenu } from "react-icons/gi";
import { MdCancel } from "react-icons/md";
import '../App.css'

const Header = () => {
    const [toggleIcon, setToggleIcon]=useState(false);
    
    console.log(toggleIcon)
    

    return (
        <header className='header-component'>
            <a href='/' className='logo'>CloudBee.</a>
            <nav className={toggleIcon && 'active'}>
                <a href='/' id='active'>Home</a>
                <a href='/About'>About</a>
                <a href='/Skills'>Skills</a>
                <a href='/Home'>Portfolio</a>
                <a href='/Contact'>Contact</a>
            </nav>
            <button type='button' id='hamberger-menu' className={toggleIcon && 'active'} onClick={()=> setToggleIcon(!toggleIcon)}>{toggleIcon ? <MdCancel/>: <GiHamburgerMenu />}</button>
        </header>

    )

}
export default Header
