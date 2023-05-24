import React from 'react';
import './Carousel.css';

import pic01 from './pic/BannerTelangana.jpg';
import pic02 from './pic/MuseumsTel.webp';
import pic03 from './pic/PalacesTelanagana.jpg';
import pic04 from './pic/WaterfallsTelangana.jpg';
import pic05 from './pic/ramuji.jpg';
import pic06 from './pic/templeTelanglana.jpg';




import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

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
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic01} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic02} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={pic03} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic04} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic05} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={pic06} className='carouselImg' /></SwiperSlide>
      
      </Swiper>




</>


)


}
export default Carousel;

