import './Slide.css';

import React from 'react'

const Slide = (props) => {
  return (
    <div className='slide-content'>
        <div className='container'>
            <img src={props.image} />
            <p className='text-one'>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live far from the countries Vokalia."</p>
            <p className='text-two'>{props.name}</p>
        </div>
        
    </div>
  )
}

export default Slide