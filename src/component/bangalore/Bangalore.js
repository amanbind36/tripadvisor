import React from 'react'
import Styles from "./bangalore.module.css"


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
const Bangalore = () => {
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
    <div className={Styles.container}>
  <div className={Styles.main}>
  <div className={Styles.text}><h1  >Adventure Tourism in Bangalore</h1></div>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2>Tourism in Bangalore</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Bangalore</h3>
            <p>The City of Bengaluru is one of the top metropolitan cities in India which has been a frontrunner in various fields earning it multiple nick names.Bangalore (Bengaluru) is an Indian metropolitan city located 3000ft above sea level in the state of Karnataka. The unique geography of the city brings with it a pleasant climate throughout the year. The summers aren’t as harsh as in many parts of the country and the Bengaluru rains remain a thing of beauty.</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>Bengaluru, formerly known as Bangalore, is the capital of the state of Karnataka. It is located in southern India on Deccan Plateau. The city is a mix of traditions and modernity. The various ethnicities residing in it celebrate their cultural festivities while engaging with the recent upsurge in its café culture and pub-hopping. It is often referred to as the ‘Silicon Valley’ being the hub of IT development in India.

The lush green area around Bangalore is interspersed with waterfalls, wildlife sanctuaries, and brooks and rivers waiting to be explored. Due to the presence of lush gardens and pastoral land, it has gained a reputation for being the ‘Garden City of India.’ Cubbon Park, Ulsoor Lake, Indira Gandhi Musical Fountain Park, Bugle Rock Park, and Lumbini Garden are the marvels of this city.</p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      
      <hr/>
    </div>



    <br/>
      <br/>
      <br/>
    <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%" src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/e1rkrmxlki8lks0kx18sdv5q8g29_1592384351_shutterstock_409537879.jpg' />
       </div>
       <div>
       <h2> Helicopter Ride in Bangalore</h2>
     
        <div className={Styles.textt}>
            <p>Apart from being the center of the high-tech industries in India, Bangalore is home to beautiful parks, famous tourist attractions, hilly terrains, and much more. Why not embark on some unique and experiential ways of sightseeing by which you get to explore the city's other aspects.

Choose this exciting helicopter ride in Bangalore; feel the excitement as you take off and soar high in the sky. Witness the panoramic views of the entire Bangalore city, from the height of 1000 ft and soothe your senses with astonishing 360-degree sights.

</p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
       <h3>Paragliding in Nandi Hills</h3>
       <div className={Styles.textt}>
        <p>Fly high in the sky with scenic valley views of Nandi Hills, Bangalore during the adventurous Paragliding activity. You get a chance to enjoy the 360-degree view from a height of 4000 feet above ground level. Feel like a carefree bird while you are assisted by trained professionals with all the safety gear and equipment.</p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/5crjjq0upgsnpwnophfgru5ac0ag_shutterstock_107043215.jpg'/>
       </div>
      </div>


      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/63znh36mzyxi2gmmbn4c38mekupu_1562854402_lal_bagh.jpg'/>
       </div>
       <div>
       <h3>Lal Bagh Botanical Garden Overview</h3>
        <div className={Styles.textt}>
    <p>Lalbagh is one of the oldest botanical gardens in India and is also a major tourist attraction in South India. Located in South Bengaluru, the Lalbagh Botanical Garden is not only one of the largest botanical gardens in India, but also the first of its kind, with planned routes, glasshouses and ornamental flowers growing throughout the property.</p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>

      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
   <h3>   Bangalore Palace Overview</h3>
       <div className={Styles.textt}>
        <p>The Palace is a perfect representation of the lavishness and splendour with which India's most resilient dynasties ruled. Famous for its opulent architecture and amusement activities, the Palace is visited by several visitors every day. 

The colossal Palace boasts of massive courtyards, bright interiors, kingly grounds, splendid spiral staircases, stately towers and a luscious garden in a proud display of posh regality.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/bzloqfpib57ubbriuk09ua11tzqi_1562758394_Bangalore_palace.jpg'/>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/ohqid0k990wea2od5apvlze5yjsi_1562758442_bannerghatta.jpg' />
       </div>
       <div>
       <h3>Bannerghatta National Park</h3>
        <div className={Styles.textt}>
            <p>Located on the outskirts of Bangalore, and usually known as BBBP, the Bengaluru Bannerghatta Biological Park is amongst the most popular and frequently visited destinations in the city. Catering to nature and wildlife enthusiasts, it is an integral part of the magnificent Bannerghatta National Park and is spread across a massive area. </p>
        </div>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
       Nandi Hills
       <div className={Styles.textt}>
        <p>Nandi Hills, a small albeit beautiful town, is just 60 km away from the city of Bangalore and has emerged as the perfect weekend getaway for its people. Even though it is most well-known for its viewpoints and its greenery, Nandi Hills is also a popular historical fortress that is home to a number of temples, monuments and shrines.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/60zv3p7hoj9ihglp7igcbaha2zi0_1575010669_shutterstock_652879903.jpg'/>
       </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%"  src='https://res.cloudinary.com/thrillophilia/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_auto,h_600,q_auto,w_auto/v1/filestore/z6whbasem4de9gzprexk0gqxy0wa_1574849625_iskcon.jpg'/>
       </div>
       <div>
       <h3>Iskcon Temple Bangalore</h3>
      
        <div className={Styles.textt}>
            <p>Located in the Rajaji Nagar in Bangalore, and a venture of the International Society of Krishna Consciousness, ISKCON Temple in Bangalore is a shrine to Lord Krishna. 

This splendid architecture was first erected by Sri Madhu Pandit Das and inaugurated in the year 1997 by the then President of India, Shankar Dayal Sharma. </p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Bangalore