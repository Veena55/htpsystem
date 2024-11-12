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
        delay: 500,
        disableOnInteraction: false,
      }}
      // pagination={{ clickable: true }}
      speed={600}  // Smooth transition speed
    >
      <SwiperSlide>
        <img src={service7} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={service1} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={service3} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={service4} alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={service5} alt="Slide 4" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={service6} alt="Slide 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default AutoplaySlider;