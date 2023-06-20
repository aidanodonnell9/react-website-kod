import React, { useState } from 'react';
import './patient-forms.css';

export default function Patientforms() {
    const [button] = useState(true);
    const [embededURL] = useState('https://drive.google.com/file/d/1uiYHIupL9f54hIllveFG0Ajva4izjfwi/preview')
    return (
        <div className='patient-form'>
            <h1> New Patient Forms</h1>
            <div className='pdf'>
                <iframe title='form' src={embededURL}></iframe>
            </div>
            <p> Thank you for choosing Kurt J. O'Donnell, D.D.S. General Family Dentistry! To the right are new patient forms, you can download these forms by clicking the button below. Once these forms are downloaded, they must be printed out and completed prior to your first appointment. </p>
            <div className='but'>
                <a href={require("../../New Patient Forms (1).pdf")} download="New_Patient_Forms_Dr.ODonnell.pdf"><button>Download New Patient Forms</button></a>
            </div>
        </div>
    );
}