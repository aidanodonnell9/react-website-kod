import React from 'react'
import './footer.css'
function Footer() {
    return (
        <div className='footer-container'>
            {/* <section className='footer-subscription'> */}
            {/* <p className='footer-subscription-heading'>
                    Thank you for your business! Referral is the greatest complement!
                </p>
                <p className='footer-subscription-text'>
                    Call today to make an appointment!
                </p>

            </section> */}
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h3>Williamsville Office</h3>
                        <h4>475 International Drive</h4>
                        <h4>Williamsville, NY 14221</h4>
                        <h4> &nbsp;(716) 632-1470</h4>
                    </div>
                    <h1> </h1>
                    <h1><i class="fa-solid fa-tooth"></i></h1>
                    <div class='footer-link-items'>
                        <h3> &nbsp;            Orchard Park Office</h3>
                        <h4>220 Redtail Drive Suite #8</h4>
                        <h4>&nbsp;&nbsp;Orchard Park, NY 14127</h4>
                        <h4> &nbsp;&nbsp;(716) 771-3730</h4>
                    </div>
                </div>
                {/* <small class='website-rights'>Created by: Aidan O'Donnell, 2023</small> */}
            </div>
            {/* <div className='website-rights'>
                <div>
                    <small> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Image by <a href="https://www.freepik.com/free-vector/flat-dental-care-tools-pattern_4172594.htm#page=3&query=tooth%20background&position=22&from_view=search&track=robertav1_2_sidr">Freepik</a></small>
                </div>
                <div>
                    <small>Website Design: Aidan O'Donnell</small>
                </div>
            </div> */}
        </div>
    );
}

export default Footer