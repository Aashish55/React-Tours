import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {

    render() {
        return (
            <div className='Navbar'>
                <div className='logo'>
                    AJ Tours & Travels
                </div>
                
                <div >
                    <input className='searchBox' placeholder='Search' />
                </div>

                <nav>
                    <a href='Home'>Home</a>
                    <a href='Contact'>Contact</a>
                    <a href='About'>About</a>
                    <div id="indicator"></div>
                </nav>

            </div>
        );
    }
}

export default Navbar;