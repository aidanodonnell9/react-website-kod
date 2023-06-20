import './Locations.css';
import { Button3, Button4 } from './button'
import './Cards.css'

import React, { useState } from 'react'

function Locations() {
  const [button] = useState(true);

  return (
    <div className='all'>
      <h1>Our Offices</h1>

      <ul className='williamsville'>
        {button && <Button3 buttonStyle='btn--outline2'>Williamsville Directions</Button3>}
      </ul>
      <span> </span>
      <ul className='op'>
        {button && <Button4 buttonStyle='btn--outline3'>Orchard Park Directions</Button4>}
      </ul>
      {/* <div class='addresses'> */}
      <div className='willville'>
        <h3>Williamsville Office</h3>
        <h4>475 International Drive</h4>
        <h4>Williamsville, NY 14221</h4>
        <h4>Phone: (716) 632-1470</h4>
        <h4>Fax: (716) 771-3730</h4>
        {/* </div> */}
      </div>
      {/* <div class='addresses'> */}
      <div className='opoffice'>
        <h3>Orchard Park Office</h3>
        <h4>220 Redtail Drive Suite #8</h4>
        <h4>Orchard Park, NY 14127</h4>
        <h4>Phone: (716) 771-3730</h4>
        <h4>Fax: (716) 771-3730</h4>
        {/* </div> */}
      </div>
    </div>
  )
}

export default Locations