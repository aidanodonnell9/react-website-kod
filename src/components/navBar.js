import React, { useState } from 'react'
import { Link } from 'react-router-dom'
//import './navBar.css'



function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className="navbar-logo" >
                        <i class="fa-solid fa-tooth"></i> Dr. Kurt J. O'Donnell, D.D.S. <i class="fa-solid fa-tooth"></i>
                    </Link>
                    <div className="menu" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}></ul>
                    <li className='nav-item'>
                        <Link to='/' className='navbarlinks' onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/patient-forms' className='navbarlinks' onClick={closeMobileMenu}>
                            Patient Forms
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/location' className='navbarlinks' onClick={closeMobileMenu}>
                            Location
                        </Link>
                    </li>
                </div>
            </nav>

        </>
    );
}

export default Navbar