import React from 'react';
import '../../App.css';
import Abtus from '../abtus';
import './about-us.css'

export default function Aboutus() {
    return <>
        <div className='allth'>
            <div className='sink'>
                <Abtus />
            </div>
            <div className='texts'>
                <h1>We offer multiple locations across the WNY region!</h1>
                <p>With two offices, one in Williamsville and one in Orchard Park, Kurt J. O'Donnell offers family-like care at multiple locations. Click on the picture of each office to get directions to your desired location. Appointments must be made over the phone, so call today to schedule! </p>
            </div>
        </div>
    </>;
}