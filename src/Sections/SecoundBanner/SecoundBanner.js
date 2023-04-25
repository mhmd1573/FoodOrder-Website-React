import './SecoundBanner.css';
import { MainButton } from '../../Components/index';

const SecoundBanner = () => {
  return (
    <div className="secound-banner">
        <div className='container banner-container'>
            <h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>

            <MainButton className="button" title="Read More"/>
        </div>
    </div>  )
}

export default SecoundBanner