import './Questions.css';
import {QuestionCard} from '../../Components/index';

const Questions = () => {
  return (
    <div className='container container-question'>
            <h1>Frequently Asked Questions</h1>

            <div className='row'>

                <QuestionCard />
                <QuestionCard />
                </div>

            <div className='row'>

                 <QuestionCard />
                <QuestionCard />

            </div>
    </div>


  )
}

export default Questions