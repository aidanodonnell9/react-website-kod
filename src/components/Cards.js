import React, { useState } from 'react'
import { Button2 } from './button'
import './Cards.css'

function Cards() {
    const [button] = useState(true);

    return (
        <div className='cards'>
            <h1>Our Offices</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        {button && <Button2 buttonStyle='btn--outline2'>Williamsville</Button2>}
                        <span> </span>
                        {button && <Button2 buttonStyle='btn--outline3'>Orchard Park</Button2>}
                    </ul>
                </div>
            </div>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Thank you for your business! Referral is the greatest complement!
                </p>
                <p className='footer-subscription-text'>
                    Call today to make an appointment!
                </p>

            </section>
        </div>
    )
}

export default Cards