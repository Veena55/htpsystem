import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules'; // Removed Navigation

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import service1 from '../assets/service1.png';
import service7 from '../assets/service7.png';
import service3 from '../assets/service3.png';
import service4 from '../assets/service4.png';
import service5 from '../assets/service5.png';
import service6 from '../assets/service6.png';

const AutoplaySlider = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 800,
        disableOnInteraction: false,
      }}
      // pagination={{ clickable: true }}
      speed={600}  // Smooth transition speed
    >
      <SwiperSlide>
        <div className='w-[95%]'>
          <img src={service7} className='w-full' alt="Slide 1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-[85%]'>
          <img src={service1} className='w-full' alt="Slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-[95%]'>
          <img src={service3} className='w-full' alt="Slide 3" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-[95%]'>
          <img src={service4} className='w-full' alt="Slide 4" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-[95%]'>
          <img src={service5} className='w-full' alt="Slide 4" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='w-[90%]'>
          <img src={service6} className='w-full' alt="Slide 4" />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AutoplaySlider;