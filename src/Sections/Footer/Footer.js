import './Footer.css';
import {FaFacebookF, FaTwitter, FaInstagram, FaYoutube} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='container'>
            <div className='row '>
                <div className='col-md-12'>
                    <a href='#' className='footer-logo'>Register</a>
                    <a href='#' className='footer-logo'>Forum</a>
                    <a href='#' className='footer-logo'>Affliate</a>
                    <a href='#' className='footer-logo'>FAQ</a>
                    </div> 
        </div>

                    <div className='row footer-row'>
                 <div className='col-md-12'>
                    <a href='#' className='footer-icon'><FaFacebookF/></a>
                    <a href='#' className='footer-icon'><FaTwitter/></a>
                    <a href='#' className='footer-icon'><FaInstagram/></a>
                    <a href='#' className='footer-icon'><FaYoutube/></a>
                    </div>  

                    </div>
      
                    <h5>© 2023. Mohamad Owaiti. All rights reserved.</h5>
        </div>

    </div>
       

  )
}

export default Footer