/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import logo from '../img/logo-black.png'
import iconeDeBusca from '../img/search.png'
import iconeDeCompras from '../img/bag.png'
import MenuLateral from './MenuLateral';


function Header() {
    return (
      <div>
          <header style={{position: 'relative',zIndex:2}}>
            <div className="menu">
              <div id="logo">
                <img src={logo} alt="logo da arredo"/>
                </div>
                <button className="menu-burguer">&#9776;</button>
                    <nav>
                        <ul>
                            <li><a className="link-menu" href="#">Home</a></li>
                            <li><a className="link-menu" href="#">Pages</a></li>
                            <li><a className="link-menu" href="#">Shop</a></li>
                            <li><a className="link-menu" href="#">Portfolio</a></li>
                            <li><a className="link-menu" href="#">Blog</a></li>
                            <li><a className="link-menu" href="#">Elements</a></li>
                        </ul>
                    </nav>

                    <div className="menu-icons">
                    <img className="iconeBusca" src={iconeDeBusca} alt="icone de busca"/>

                    <img className="iconeCompras" src={iconeDeCompras} alt="icone de compras"/>
                    </div>

                    <MenuLateral/>
                    <div>
                    </div>
            </div>
        </header>
      </div>
    );
  }
  
  export default Header;