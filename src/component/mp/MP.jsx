import React from 'react';
import './MP.css';

import mpTemplee from './photos/mpTemplee.webp';
import mpWild from './photos/mpWild.jpg';
import mpmousem from './photos/mpmousem.jpg';
import mppalce from './photos/mppalce.jpg';
import mpwater from './photos/mpwater.jpg';


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



const MP = () => {

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
    
    
    <div className='banner5'>
        <p className='tourTitles'>Tourism to Madhya Pradesh</p>
    </div>
    <div>
        <article class="mpnewspaper">
        Madhya Pradesh - A very Heart of !ncredible India, is a blend of history and modernization. Plan a trip to Madhya Pradesh to witness the Vast Species of wildlife in National Parks and Wildlife Santuries, religious Places and heritage locations. The state is a complete package of attractions that are spotted in different parts of India. People who want to see the diverse side of India, Madhya Pradesh is a must visit.

We Offer different Tour Packages of Madhya Pradesh like MP Wildlife Tour Packages, MP Heritage Tours, MP Pilgrimage Tours, MP Educational Tour Packages, MP Tribal and Cultural Tours, The Tour Itinerary for best of Mp Tour Packages Start from 07 Nights/ 08 Days and are upto 19 Nights / 20 Days. We have our Own Fleet of vehicles to cater the same, We also provide information of MP tourist places, Mp tour & Travel itineraries, Mp travels, Mp tours, tours and travels in Madhya Pradesh as a complete Travel Guide of Madhya Pradesh. Madhya Pradesh is having 03 World Heritage sites named Khajuraho Sanchi and Bhimbetka Caves.
</article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in Madhya Pradesh</p>
        
        <div className='mpcatogaryDiv'>
            <img src={mpTemplee} alt="" className='mpimages'/>
            <p className='textWBCat'>Temples: Omkareshwar Temple, Madhya Pradesh
Rameshwar Temple,Mahakaleshwar Jyotirlinga,Kal Bhairav Temple, Bada Ganesh Mandir,Kal Bhairav Mandir,
Chintaman Ganesh Temple,Matangeshwar Temple,Annapurna Temple, Lakshmana Temple,Javari Temple </p>
        </div>

        <div className='mpcatogaryDiv'>
            <p className='textWBCat'>Museums: Bharat Bhavan,Indira Gandhi Rashtriya Manav Sangrahalaya,Tribal Museum Bhopal,Rani Durgawati Museum,Maharaja Chhatrasal Museum,Vidisha Museum
         </p>
            <img src={mpmousem} alt="" className='mpimages'/>

        </div>

        <div className='mpcatogaryDiv'>
        <img src={mpwater} alt="" className='mpimages' />
            <p className='textWBCat'> Waterfalls: Patalpani Waterfall, Dhuandhar Falls, Raneh Falls, Pandav Falls,Bahuti Falls,Tincha Falls,Rajat Pratap Falls etc  </p>
        </div>

        <div className='mpcatogaryDiv'>
            <p className='textWBCat'>
            Palaces: Mansingh Palace,Jai Vilas Palace,Jahangir Mahal,Jahaz Mahal,Sheesh Mahal,Hindola Mahal etc
            </p>
            <img src={mppalce} alt=""className='mpimages' />

        </div>


        <div className='mpcatogaryDiv'>
        <img src={mpWild} alt=""className='mpimages' />

            <p className='textWBCat'>
            Wild Life: Kanha National Park,Bandhavgarh National Park,Madhav National Park,
Sanjay National Park,Van Vihar National Park,Panna National Park,
Satpura National Park,Pench National Park,Mandla Plant Fossils National Park
            </p>

        </div>
    </div>
    
    
    
    
    
    
    
   
    
    
    </>
  )
}
export default MP;



