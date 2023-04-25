import './Testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper/core';
import 'swiper/css';
import avatar01 from '../../assets/images/avatar1.jpg';
import avatar02 from '../../assets/images/avatar02.jpg';

import {Slide} from '../../Components/index';

const Testimonials = () => {
  return (
    <div className='testimonials'>

            <div className='container testimonials-container'>
                    <h1>Testimonials</h1>
                    


                                    <Swiper
                             slidesPerView={1}
                             loop={true}
                             autoplay={{ delay: 2000 }}
                                     >
                    <SwiperSlide><Slide name="Sarah Doe-UI Designer" image={avatar01} /></SwiperSlide>
                    <SwiperSlide><Slide name="Mohamad Owaiti-UI Designer" image={avatar02}  /></SwiperSlide>
                    <SwiperSlide><Slide name="Omar Stanford-UI Designer" image={avatar02} /></SwiperSlide>
                    </Swiper>

            </div>

    </div>
  )
}

export default Testimonials