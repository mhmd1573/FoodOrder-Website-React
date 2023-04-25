import './Subscribe.css';
import { MainButton } from '../../Components';

const Subscribe = () => {
  return (
    <div className='container subscribe-container'>
            <h1>Hurry up! Subscribe our newsletter and get 25% Off</h1>
            <p>Limited time offer for this month. No credit card required.</p>
            <input type='text' placeholder='Enter your email address' /><MainButton title='Subscribe' className="button" />
    </div>
  )
}

export default Subscribe