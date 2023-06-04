import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'



function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
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
                </div>
            </nav>

        </>
    );
}

export default Navbar