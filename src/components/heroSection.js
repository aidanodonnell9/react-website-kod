import React, { useState } from 'react'
import { Button } from './button'
import './heroSection.css'
import '../App.css'



function Herosection() {
    const [button] = useState(true);
    return (
        <div className='hero-container'>
            {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
            <h1>Kurt J. O'Donnell, D.D.S.</h1>
            <p>General Family Dentistry</p>
            <div className="hero-btns">
                {button && <Button buttonStyle='btn--outline'>New Patient Forms</Button>}
                {/* <Button2 className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                    Locations
                </Button2> */}
            </div>
            {/* <div className='office-images'> */}
            {/* {button && <Button2 buttonStyle='btn--outline2'>Williamsville</Button2>} */}
            {/* <span> </span> */}
            {/* {button && <Button2 buttonStyle='btn--outline3'>Orchard Park</Button2>} */}
            {/* <img src={require("../IMG-01781.jpg")} alt="williamsville" /> */}
            {/* <img src={require("../IMG-02031.jpg")} alt="OP" /> */}
            {/* </div> */}
            {/* <div className='imgs'>
                <img src = '/public/IMG-0178.jpg'></img>
            </div> */}
        </div>
    );
}

export default Herosection