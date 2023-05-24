import React from 'react';
import './Sikkim.css';

import pic009 from './img/pic009.webp';
import pic004 from './img/pic004.jpg';
import pic007 from './img/pic007.jpg';
import pic002 from './img/pic002.jpg';
import pic008 from './img/pic008.jpg';


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";


import p1 from "../picc/p1.jpg"
import p2 from "../picc/p2.jpg"
import p3 from "../picc/p3.jpg"
import p4 from "../picc/p4.jpg"
import p5 from "../picc/p5.jpg"
import p6 from "../picc/p6.jpg"
import p7 from "../picc/p7.jpg"
import p8 from "../picc/p8.jpg"
import p9 from "../picc/p9.jpg"



const Sikkim = () => {

  return (
    <>
    

    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
      
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={p1} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={p2} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={p3} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={p4} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={p5} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={p6} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={p7} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={p8} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={p9} className='carouselImg' /></SwiperSlide>
  
      </Swiper>
    
    <div className='banner9'>
        <p className='tourTitles'>Tourism to Sikkim</p>
    </div>
    <div>
        <article class="SkmcatogaryDiv">
        Sikkim, state in India,is located in the northeastern part of the country, in the eastern Himalayas. It is one of the smallest states in India. Sikkim is bordered by the Tibet Autonomous Region of China to the north and northeast, by Bhutan to the southeast, by the Indian state of West Bengal to the south, and by Nepal to the west. The capital is Gangtok, in the southeastern part of the state

A part of the Eastern Himalaya, Sikkim is notable for its biodiversity, including alpine and subtropical climates, as well as being a host to Kangchenjunga, the highest peak in India and third highest on Earth. Sikkim's capital and largest city is Gangtok. Almost 35% of the state is covered by the Khangchendzonga National Park.

Long a sovereign political entity, Sikkim became a protectorate of India in 1950 and an Indian state in 1975. Its small size notwithstanding, Sikkim is of great political and strategic importance for India because of its location along several international boundaries. Area 2,740 square miles (7,096 square km). Pop. (2011) 607,688.Sikkim has four districts – East Sikkim, North Sikkim, South Sikkim and West Sikkim.The district capitals are Gangtok,Mangan, Namchi and Gyalshing respectively. These four districts are further divided into 16 subdivisions; Pakyong, Rongli, Rangpo and Gangtok are the subdivisions of the East district. Soreng, Yuksom, Gyalshing and Dentam are the subdivisions of the West district. Chungthang, Dzongu, Kabi and Mangan are the subdivisions of the North district. Ravongla, Jorethang, Namchi and Yangyang are the subdivisions of the South district.


        </article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in Sikkim</p>
        
        <div className='SkmcatogaryDiv'>
            <img src={pic009} alt="" className='skmimages'/>
            <p className='textWBCat'>Temples: Shri Viswa Vinayaka Mandir,Samdruptse Shiva Temple,Shirdi Sai Mandir,Kirateshwar Mahadev Mandir,Enchey, Rumtek Monastery </p>
        </div>

        <div className='SkmcatogaryDiv'>
            <p className='textWBCat'>Pass:Nathula Pass,Chumbi valley ,Yumthang Valley,Gurudongmar Valley.
         </p>
            <img src={pic004} alt="" className='skmimages'/>

        </div>

        <div className='SkmcatogaryDiv'>
        <img src={pic007} alt="" className='skmimages' />
            <p className='textWBCat'> Waterfalls & Lakes: Tranquil waterfalls ,Serene lakes,Tsomgo Lake,Gurudongmar Lake </p>
        </div>

        <div className='SkmcatogaryDiv'>
            <p className='textWBCat'>
            Mountains: Mt. Kangchendzongha,Mt. Pandim and Mt. Sinialchu.
            </p>
            <img src={pic002} alt=""className='skmimages' />

        </div>


        <div className='SkmcatogaryDiv'>
        <img src={pic008} alt=""className='skmimages' />

            <p className='textWBCat'>
            Wild Life: Khangchendzonga National Park,Pangolakha Wildlife Sanctuary, Barsey Rhododendron Wildlife Sanctuary,Kyongnosla Alpine Sanctuary, Fambong Lho Wildlife Sanctuary,Shingba Rhododendron Sanctuary
            </p>

        </div>
    </div>
    
    
    
    
    
    
    
   
    
    
    </>
  )
}
export default Sikkim;



