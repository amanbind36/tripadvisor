import React from 'react';
import './Carousel.css';

import pic01 from './picss/pic01.webp';
import pic02 from './picss/pic02.jpeg';
import pic03 from './picss/pic03.jpeg';
import pic04 from './picss/pic04.jpeg';
import pic05 from './picss/pic05.jpeg';
import pic06 from './picss/pic06.jpeg';
import pic07 from './picss/pic07.jpeg';
import pic08 from './picss/pic08.jpeg';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Navigation,Pagination } from "swiper";

const Carousel = ()=>{
return(
<>

<Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={true} 
          navigation={true}
        modules={[Autoplay,Pagination,Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic01} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic02} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={pic03} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic04} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic05} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={pic06} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic07} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic08} className='carouselImg' /></SwiperSlide>
      </Swiper>




</>


)


}
export default Carousel;

