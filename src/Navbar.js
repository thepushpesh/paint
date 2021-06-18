import React from 'react'
import { FaBars } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Links } from './Data';
import { useState } from 'react';

export default function Navbar() {
  const [showNav, setShowNav] = useState(false);
//     const toggleLinks = () => {
//     setShowNav(!showNav);
//   };
    return (
        <nav>
            <button onClick={() => { setShowNav(!showNav)}} className='menu'>
                <FaBars/>
            </button>
            <div className="brand">
                <h3>PAINT</h3>
            </div>
            {showNav && 
            <div className='links-container'>
                <ul className="nav-links">
                    {Links.map((item) => {
                        return (
                            <li key={item.id}>
                                <a href="">{item.url}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            }
            <div className="cart">
                <FiShoppingCart/>
            </div>
        </nav>       
    )
}
