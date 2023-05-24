import React from 'react';
import './TamilNadu.css';


import pic001 from './img/pic001.webp';
import piv002 from './img/piv002.jpg';
import pic003 from './img/pic003.jpg';
import pic004 from './img/pic004.jpeg';
import pic005 from './img/pic005.jpg';
import pic006 from './img/pic006.jpg';
import pic007 from './img/pic007.jpg';
import pic008 from './img/pic008.jpg';
import pic0010 from './img/pic0010.jpg';

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


const TamilNadu = () => {

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
    
    <div className='banner8'>
        <p className='tourTitles'>Tourism to Tamil Nadu</p>
    </div>
    <div>
        <article class="tnnewspaper">
        Tamil Nadu has the largest tourism industry in India with a percentage share of 21.31% and 21.86% of domestic and foreign tourist visits in the country. According to the 2020 Ministry of Tourism report, the number of domestic arrivals was at 494.8 million making the state the second most popular tourist destination in the country, and foreign arrivals numbered 6.86 million, the highest in the country, making it the most popular state for tourism in the country.[1]
Tamil Nadu has more than 4,000 years of continuous cultural history. Tamil Nadu has some of the most remarkable temple architecture in the country, and a living tradition of music, dance, folk arts and fine arts. Tamil Nadu is well renowned for its temple towns and heritage sites, hill stations, waterfalls, national parks, local cuisine, natural environment and wildlife
        Tamil Nadu shows evidence of continuous habitation from 15,000 to 10,000 BC. The region had been ruled by several dynasties including the Cholas, Chalukyas, Pallavas, and Pandyas. During the reign of the Cholas, Tamil Nadu witnessed architectural accomplishments including the Thanjavur Temple and a golden age of Tamil literature.
In the modern times, the Portuguese and French also ruled the area. By the 17th century, the British took control and under their rule, the region was part of Madras Presidency. Post-independence, in the late 1960s, the state of Tamil Nadu was formed.
        In addition to the long history of the Tamil people, Tamil Nadu is famous for its temples, festivals, and celebration of the arts. The Hindu temples and monuments at Mamallapuram have become famous tourist attractions. One of the many festivals in Tamil Nadu is the Koovagam festival, where thousands of people gather to celebrate their transgender identities. In Tamil Nadu Bharata natyam, Karnatak music, and movies are all widely popular.
        </article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in Tamil Nadu </p>
        
        <div className='tncatogaryDiv'>
            <img src={pic0010} alt="" className='tnimages'/>
            <p className='textWBCat'>Temples:Bala Murugan Temple,Arulmigu Brahmapureeswarar Temple, Uchippillaiyar Temple,Meenakshi Amman Temple, Sripuram Golden Temple,Bala Murugan temple,Navagraha temples,Kumbakonam Brahma Temple ,Ekambareswarar Temple,Ramanathaswamy Temple ,Kapaleeshwarar Temple, Elk Hill Murugan Temple,Nagaraja Temple,</p> </div>

        <div className='tncatogaryDiv'>
            <p className='textWBCat'>Beaches & Lakes:Marina Beach,Kunthukal Beach,Mahabalipuram Beach,Mathu Nagar Beach,Marakkanam Beach,Pulicat Lake,Punganoor Lake, Pykara, Avalanche Lake,Berijam Lake, Kodaikanal Lake,  </p>
            <img src={piv002} alt="" className='tnimages'/>

        </div>

        <div className='tncatogaryDiv'>
        <img src={pic005} alt="" className='tnimages' />
            <p className='textWBCat'> Waterfalls & Hills:Pambar Fall,Papanasam Fall,Silver Cascade Fall,Puliyancholai Waterfall,Suruli Fall,Kalhatti Waterfall,Manimuthar Fall,Kumbakarai Fall,Megam Fall,The Cardamom Hill, The Palamathi Hills,Tiger Hill, Yelagiri Hill,Cairn Hill,Jawadhu Hill,Kalvarayan Hill, Kolli Hills </p> </div>

        <div className='tncatogaryDiv'>
            <p className='textWBCat'>
            Palaces & Fort:Kattabommm Memorial Fort,Padmanabhapuram Palace,Thirumalai Nayakar Mahal, Vattakottai Fort, Vellore Fort,Alamparai Fort,Fort St. George, Sankagiri Fort,Gingee Fort </p>
            <img src={pic007} alt=""className='tnimages' />

        </div>


        <div className='tncatogaryDiv'>
        <img src={pic004} alt=""className='tnimages' />

            <p className='textWBCat'>
            Wild Life: Mukurthi National Park, Nellai Wildlife Sanctuary,Srivilliputhur Sanctuary,The Mudumalai National Park,Point Calimere Wildlife Sanctuary,Vallanadu Sanctuary,Amirthi Forest,Anamalai Tiger Reserve,Guindy National Park, Gulf Mannar Marine National Park, </p>

        </div>
    </div>
    
    
    
    
    
    
    
   
    
    
    </>
  )
}
export default TamilNadu;



