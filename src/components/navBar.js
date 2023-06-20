import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './navBar.css'



function Navbar() {
    const [click, setClick] = useState(false);
    const [setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };



    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        Kurt J. O'Donnell, D.D.S. <i class="fa-solid fa-tooth"></i>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>

                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='navbarlinks' onClick={closeMobileMenu}>
                                <p>Home <i class="fa-solid fa-house-chimney"></i></p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' className='navbarlinks' onClick={closeMobileMenu}>
                                <p>About Us <i class="fa-solid fa-circle-info"></i> </p>
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/location' className='navbarlinks' onClick={closeMobileMenu}>
                                <p>Locations <i class="fa-solid fa-location-dot"></i></p>
                            </Link>
                        </li>
                        {/* <li className='nav-item'>
                            <Link to='/patient-forms' className='navbarlinks-form' onClick={closeMobileMenu}>
                                Patient Forms
                            </Link>
                        </li> */}
                    </ul>
                    {/* {button && <Button buttonStyle='btn--outline'>New Patient Forms</Button>} */}
                </div>
            </nav>

        </>
    );
}

export default Navbar