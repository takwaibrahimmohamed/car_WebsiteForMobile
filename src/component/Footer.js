import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar,faFileArchive,faMoneyBillWave  } from '@fortawesome/free-solid-svg-icons'
const Footer = () => {
  return (
    <div className='footer'>
      {/* <div className='box_footer_icon'>
        <div className='box_icon'>
        <FontAwesomeIcon icon={faCar} style={{fontSize:"40px"}}/>
        <h3>vehicle</h3>
        </div>
        <div className='box_icon'>
        <FontAwesomeIcon icon={faMoneyBillWave} style={{fontSize:"40px"}}/>
        <h3>season pass</h3>
        </div>
        <div className='box_icon'>
        <FontAwesomeIcon icon={faFileArchive} style={{fontSize:"40px"}}/>
        <h3>history</h3>
        </div>
      </div> */}
     <div className='main_box'>
     <div className='box_footer'>
        <FontAwesomeIcon icon={faCar} style={{fontSize:"50px"}}/>
        <div className='info'>
            <h1>QRR4492</h1>
            <div className='info_info'>
               <span> visitor</span>
               <span> active</span>
            </div>
        </div>
      </div>
      <div className='box_footer'>
      <FontAwesomeIcon icon={faCar} style={{fontSize:"50px"}}/>
      <div className='info'>
            <h1>ABC1234</h1>
            <div className='info_info'>
               <span> season pass</span>
               <span> active</span>
            </div>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Footer
