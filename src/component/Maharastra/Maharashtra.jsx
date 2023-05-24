import React from 'react';
import './Maharashtra.css';


import flimcity from './Photo/flimcity.jpg';
import mahaBeaches from './Photo/mahaBeaches.jpg';
import mahaFort from './Photo/mahaFort.jpg';
import mahaTemple from './Photo/mahaTemple.jpg';
import wildlifeMahah from './Photo/wildlifeMahah.jpg'



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


const Maharashtra = () => {

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
    
    <div className='banner4'>
        <p className='tourTitles'>Tourism to Maharashtra</p>
    </div>
    <div>
        <article class="mahanewspaper">Maharashtra is the second-most populous state in India and the second-most populous country subdivision globally. Spread over 307,713 km2 (118,809 sq mi), Maharashtra is the third-largest state by area in India. It is bordered by the Arabian Sea to the west, the Indian states of Karnataka and Goa to the south, Telangana to the southeast and Chhattisgarh to the east, Gujarat and Madhya Pradesh to the north, and the Indian union territory of Dadra and Nagar Haveli and Daman and Diu to the northwest.[15]

For ease of administration, the state is divided into 6 divisions and 36 districts, with the state capital being Mumbai, the most populous urban area in India, and Nagpur serving as the winter capital, which also hosts the winter session of the state legislature.[16] Godavari and Krishna are the two major rivers in the state. Forests cover 16.47 per cent of the state's geographical area. The state is home to six UNESCO World Heritage Sites: Ajanta Caves, Ellora Caves, Elephanta Caves, Chhatrapati Shivaji Maharaj Terminus (formerly Victoria Terminus), The Victorian Gothic and Art Deco Ensembles of Mumbai and The Western Ghats, a heritage site made up of 39 individual properties of which 4 are in Maharashtra.[17][18]

The region that encompasses the state has a history going back many millennia. Prior to Indian independence, notable dynasties and entities that ruled the region include in a chronological order, the Asmakas, the Mauryas, the Satavahanas, the Western Satraps, the Abhiras, the Vakatakas, the Chalukyas, the Rashtrakutas, the Western Chalukyas, the Seuna Yadavas, the Khaljis, the Tughlaqs, the Bahamanis, the Deccan sultanates, the Mughals, the Maratha Empire founded by Shivaji, and the British. Ruins, monuments, tombs, forts, and places of worship left by these rulers are dotted around the state. At the time of the Indian independence movement in the early 20th century, along with British ruled areas of Bombay presidency, and Central Provinces and Berar, the region included many British Vassal states. Among these, the erstwhile Deccan States Agency included Kolhapur, Miraj, Sangli, Aundh, Bhor, Sawantwadi and Marathwada of Hyderabad State.
       
</article>
    </div>

    <div>
        <p className='catogoryTitle'>Popular area to visit in Maharashtra</p>
        
        <div className='mahacatogaryDiv'>
            <img src={mahaTemple} alt="" className='mahaimages'/>
            <p className='textWBCat'>Temples:	 	 
                Ashtavinayak,	Mahur	Pune,	Trimbakeshwar,
                Aundha Nagnath,	Ramtek	Tuljapur,
                Bhimashankar,Shani Shinganapur	Vajreshwari
               
                Jejuri	Pandharpur	Shirdi	
                Kolhapur	Parali Vaijnath	Titwala   </p>
        </div>

        <div className='mahacatogaryDiv'>
            <p className='textWBCat'>Forest & Wild Life:  Bor Dam,	Melghat	Pench,
           Chikhaldara	Nagpur,	Radhanagari - Dajipur,
           Kaas Plateau	Nagzira - Bodhalkasa,	     </p>
            <img src={wildlifeMahah} alt="" className='mahaimages'/>

        </div>

        <div className='mahacatogaryDiv'>
        <img src={mahaBeaches} alt="" className='mahaimages' />
            <p className='textWBCat'> Beaches: Ganpatipule,Malvan-Tarkarli	Velas,
Anjarle	Guhagar	Mumbai,	Velneshwar,
Bhogwe,	Harihareshwar,	Murud - Janjira	Vengurla
Dahanu- Bordi,	Hedvi,	Ratnagiri,	Vijaydurg
 
Diveagar	Kunkeshwar	
 </p>
        </div>

        <div className='mahacatogaryDiv'>
            <p className='textWBCat'>
            Forts & Caves: 	Ajanta Caves,Ellora	Ramshej,Kalsubai	Raigad
           Daulatabad	Karla	Shivneri,
           Elephanta Cave
            
                 
            </p>
            <img src={mahaFort} alt=""className='mahaimages' />

        </div>


        <div className='mahacatogaryDiv'>
        <img src={flimcity} alt=""className='mahaimages' />

            <p className='textWBCat'>
            Other Attractions: Flim City , Taj Hotal ,Victoria Terminus
            </p>

        </div>
    </div>
    
    
    
    
    
    
    
   
    
    
    </>
  )
}
export default Maharashtra;


