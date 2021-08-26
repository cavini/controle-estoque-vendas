import React from 'react'
import NavbarItems from './NavbarItems'
import style from './navbar.module.css'

export default function Navbar() {
    return (
        <nav id={style.navbar} style={{width:"100vw", backgroundColor:"#00A8C4"}}>
            <NavbarItems />
            
        </nav>
    )
}
