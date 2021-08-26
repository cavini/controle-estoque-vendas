import React from 'react'
import style from './navbarItems.module.css'


export default function NavbarItems() {
    
    return (
        <>
       
            
                <ul className={style.linksContainer}><li><a href="/">Início</a></li>
                <li><a href="/about">Sobre</a></li>
                <li><a href="/contact">Fale Conosco</a></li></ul>
    </>
    )
}
