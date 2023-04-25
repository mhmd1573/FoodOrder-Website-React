import './About.css';
import { MainButton } from '../../Components/index' ;
import { Row,Col } from 'react-bootstrap';

const About = () => {
  return (
    <div className="parent">

        
          
        <div className="child1">
            </div>
           

            
        <div className="child2">
            <h1>We pride ourselves on making real food from the best ingredients.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                <MainButton title="Learn More" className="button" />
            
            </div>
            
            

        </div>

  )
}

export default About