import './Explore.css';
import Card from '../../Components/Card/Card';
import info from '../../Data/CardData';
import { Container } from 'react-bootstrap';
const Explore = () => {

    const cards = info.map( card => 
        
            <Card
             key={card.id}
             image={card.image} 
             title={card.title} 
             serve={card.serve}  />
        
    );

  return (
           
    <div className=" container explore-container">
                    <div className='explore-content'>
                <h1>Explore Our Food</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                  </div>

                  <div className="row">
                    {cards}
                    </div>

        </div>
  )
}

export default Explore