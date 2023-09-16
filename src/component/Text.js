import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCar,faFileArchive,faMoneyBillWave  } from '@fortawesome/free-solid-svg-icons'
const Text = () => {
  return (
    <>
    <div className='text'>
        <h3 className='first'>i-CiTY</h3>
        <h3 className='sec'>handsfree</h3>
        <h3 className='third'>parking</h3>
        
    </div>
    <p className='text_info'>no.i technology city</p>
    <div className='greenBox'></div>
    <div className='box_footer_icon'>
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
      </div>
    </>
    
  )
}

export default Text
