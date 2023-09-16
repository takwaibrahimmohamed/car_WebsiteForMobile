import React from 'react'
import "./header.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
  return (
    <div className='header'>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f97900" fill-opacity="1" d="M0,128L34.3,122.7C68.6,117,137,107,206,117.3C274.3,128,343,160,411,165.3C480,171,549,149,617,144C685.7,139,754,149,823,176C891.4,203,960,245,1029,256C1097.1,267,1166,245,1234,229.3C1302.9,213,1371,203,1406,197.3L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"></path></svg>     
        
        
         <div className='headerInfo'>
      
          <FontAwesomeIcon icon={faChevronLeft} style={{width:"15px",position:"absolute",left:"-60px",color:"#2e3945"}}/>
            <h1> Smart parking</h1>
      </div>
      
    </div>
  )
}

export default Header
