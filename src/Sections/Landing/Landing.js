import './Landing.css';
import {MainButton} from '../../Components/index';

import {BsHandbag} from 'react-icons/bs';

const Landing = () => {
  return (
    <header>
        <div className="container ">
            <div className='row sp1'>
            <div className="col-md-6 cl1">
                <h2>Good food choices are good investments.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                <MainButton className="button" title="Order Now "/>
                <MainButton className="button btn1" title="Learn More" />
                </div>
                
            </div>
          
        </div>

    </header>

       
  )
}

export default Landing