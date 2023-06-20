import React from 'react';
import '../../App.css';
import Locations from '../Locations';
import './location.css'


export default function Location() {
    return <>
        <div className='allth'>
            <div className='sonk'>
                <Locations />
            </div>
            <div className='text'>
                <h1>We offer multiple locations across the WNY region!</h1>
                <p>With two offices, one in Williamsville and one in Orchard Park, Kurt J. O'Donnell offers family-like care at multiple locations. Click on the picture of each office to get directions to your desired location. Appointments must be made over the phone, so call today to schedule! </p>
            </div>
        </div>
    </>
}