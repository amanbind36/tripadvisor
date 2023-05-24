import React from 'react';
import './west.css';

import wb1 from '../images/wb1.jpg';
import wb2 from '../images/wb2.jpg';
import wb3 from '../images/wb3.jpg';
import wb4 from '../images/wb4.jpg';
import wbtemple from '../images/wbtemple.webp';

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


const WestBengal = () => {
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
    
    <div className='banner1'>
        <p className='tourTitles'>Tourism to West Bengal</p>
    </div>
    <div>
        <article class="wbnewspaper">
        Located in the eastern part of India, West Bengal is a land of myriad attractions. The state is adorned with picturesque hill stations, beaches, mangroves, wildlife sanctuaries, waterfalls, islands, lakes, and rivers. The iconic monuments, ancient places of worship, imposing bridges, museums, palaces, bustling markets, and flavorful street food make the state a traveler’s paradise.

        West Bengal marks a huge inflow of domestic and international tourists every year. According to the Department of Tourism, Government of India, more than 71 million tourists visited the state in 2018. It has many heritage and premium hotels, cottages, home-stays, and hostels for tourist to unwind and enjoy their tour.

        The discovery of Stone Age tools in the state indicates that the region had been inhabited since then. In the olden days, it included the current states of Tripura, West Bengal, and Assam’s Barak Valley, along with Bangladesh.

        By the 7th century AD, the present-day Bengal became a part of the Magadha Kingdom (one of the four major kingdoms in India) under the Mauryas and Guptas. By the 13th century, the region saw the emergence of Islamic power and from the mid-14th to end of 15th century it was under the reign of the Ilyas Shahi Dynasty.

        Bengal continued to be under the Muslim rule till the British in 1757 defeated the last sovereign Nawab of Bengal, Siraj ud-Daulah in the Battle of Plassey. Calcutta (Kolkata) became the capital of British India in 1772 and remained so till 1911. When India gained independence in 1947, Bengal was divided into two parts. While the western part became the state of West Bengal, the eastern part went to Pakistan and later became Bangladesh.

        Geography & Climate
        West Bengal shares its international borders with Bhutan and Nepal in the north and Bangladesh in the east. It has Assam on the east, Odisha on the south-east, Bihar on the west, and the Bay of Bengal on the south. Geographically, the state includes coastal areas, forests, river delta, fertile plains, and hilly regions. Ganga (River Hooghly) is the major river flowing through Bengal.

        The state experiences a humid subtropical climate in the northern parts and tropical savanna climate in the southern region. Summers here are marked by extremely hot and humid days. Winters are mild and pleasant in the plains and extreme in the hilly regions. While the summer months of mid-March to mid-June are ideal for visiting the hilly regions, October to March is the best time to plan a visit to other parts of West Bengal.

        </article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in West Bengal</p>
        
        <div className='wbcatogaryDiv'>
            <img src={wb1} alt="" className='Wbimages'/>
            <p className='textWBCat'>Beaches: Digha, Mandarmani, Bakkhali, Shankarpur, Tajpur, Udaipur, Frazerganj, Sagar</p>
        </div>

        <div className='wbcatogaryDiv'>
            <p className='textWBCat'>Temples: Dakshineshwar Temple, Kalighat Temple, Ramakrishna Belur Math, Mayapur ISKCON Temple, Hangseswari Temple, Rampara Kalibari Temple</p>
            <img src={wbtemple} alt="" className='Wbimages'/>

        </div>

        <div className='wbcatogaryDiv'>
        <img src={wb2} alt="" className='Wbimages' />
            <p className='textWBCat'> Museums: Victoria Memorial, Indian Museum, Mother’s Wax Museum, Tram Museum, Netaji Bhawan, Jorasanko Thakur Bari</p>
        </div>

        <div className='wbcatogaryDiv'>
            <p className='textWBCat'>Forts: Fort William, Buxa Fort, Kurumbera Fort, Fort Radisson, Fort Mornington
            </p>
            <img src={wb3} alt="" className='Wbimages'/>

        </div>

        <div className='wbcatogaryDiv'>
        <img src={wb4} alt=""className='Wbimages' />
            <p className='textWBCat'>
            Palaces: Marble Palace, Hazarduari Palace, Cooch Behar Palace, Jhargram Palace, Nashipur Rajbari, Shobhabazar Rajbari, Bawali Rajbari
            </p>
        </div>
    </div>
    
    
    
    
    
    
    
    </>
  )
}

export default WestBengal