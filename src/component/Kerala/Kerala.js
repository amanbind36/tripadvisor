import React from 'react'
import Styles from "./kerala.module.css"


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
const Kerala = () => {
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
  <div className={Styles.text}><h1  >Adventure Tourism in Kerala</h1></div>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2>Tourism in Kerala</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Kerala</h3>
            <p>Encompassing serenity, Kerala is a charming South Indian destination that should be in every traveller’s bucket list. Adorned with the emerald backwaters, sprawling and lush tea estates, pristine hill stations, and azure Arabian Sea, Kerala tourism boasts numerous tourist places with which you will fall in love instantly.

In North Kerala, districts like Kasaragod, Kannur, Wayanad, Kozhikode, and Malappuram have many attractions for the tourists. Wayanad offers a lovely hill station holiday whereas Kozhikode offers a great beach holiday and an opportunity of bird watching.

In Central Kerala, Palakkad, Thrissur, Ernakulam, and Idukki have a number of experiences in store. Thrissur is a culture aficionado’s paradise while Idukki and Ernakulam are the hotspots for nature lovers.</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>Classical art forms, colourful festivals, exotic cuisine are some of the cultural marvels that await travellers. Ayurveda, the ancient Indian system of medicine and Panchakarma, the rejuvenation therapy in Ayurveda have also helped Kerala to gain a pan-global reputation as a worth-visit destination.

Season never ends in Kerala, thanks to the year-long moderate climate and numerous festivals and events. </p>
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
        <img height="100%" width="100%" src='https://www.tourmyindia.com/states/kerala/image/munnar-banner.webp' />
       </div>
       <div>
       <h2>About Munnar Tourism</h2>
     
        <div className={Styles.textt}>
            <p>The unending expanse of tea plantation and rolling hills in Munnar make it look like a picture from a postcard. Munnar is a great holiday destination in Kerala loved by many travellers. It is the most popular hill station which is preferred by honeymooners, family vacationers as well as nature lovers.

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
       <h3>Hill Stations in Kerala</h3>
       <div className={Styles.textt}>
        <p>Blessed with a storehouse of wildlife reserves, hills, lakes, and everything good, and nice - Western Ghats, Kerala is just the right place to visit if one like to holiday in a hill station. Filled with lakes, coffee, and tea plantations, waterfalls, wildlife sanctuaries, and mountains, these hill stations are just the perfect places to be whether on a family outing or a romantic escapade. </p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://www.tourmyindia.com/states/kerala/images/hill-stations1.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/kerala/image/best-of-south-india2.webp'/>
       </div>
       <div>
       <h3>Best of South India with Kerala</h3>
        <div className={Styles.textt}>
    <p>The diverse culture and topography of India crops a great scope for tourism. One of the most frequented parts of this country is its southern region. This breathtaking tourist destination of India is renowned for its utter natural exquisiteness and rich cultural inheritance. For the tourists planning for a trip to rejuvenate the senses and relish the paramount opulence of nature, South India is an ideal destination.</p>
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
   <h3>   Escape to Kerala</h3>
       <div className={Styles.textt}>
        <p>The paradisaical Kerala offers exotic flavours of travel. There is hardly a traveller who would refuse a chance to wander in this land of surreal beauty and rich culture. Our 8 Days/ 7 Nights desires to provide an exclusive Kerala tour that lets you have the real taste of its few flavour some destinations along with brief tour of the pride of neighbouring state of Tamil Nadu, Kanyakumari. Delight in the South Kerala tour that becomes better with the unforgettable sight of the confluence of Indian Ocean, Arabian Sea and Bay of Bengal at Kanyakumari. </p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://www.tourmyindia.com/states/kerala/image/escape-to-kerala2.webp'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/kerala/image/enchanting-kerala3.webp' />
       </div>
       <div>
       <h3>Enchanting Kerala</h3>
        <div className={Styles.textt}>
            <p>Down South, Kerala calls globetrotters to have an experience of a lifetime. Dressed in shamrock green, Kerala wins heart like no one can. With our 10Days/9Nights Kerala tour, we want you to satiate your wanderlust and fall madly in love with this surreal state in India. Join us for an exploration and an expedition of a land that exudes immense vibrance and tranquility that is hard to miss. </p>
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
       Kerala Honeymoon Tour
       <div className={Styles.textt}>
        <p>Sandwiched between the luscious Western Ghats and the pristine Arabian Sea, Kerala is a tropical paradise that has been grabbing the attention of millions of people being a supernatural, and ultra-private honeymoon destination. For a quintessential far-flung escape, there's nothing better than Kerala, where the pristine sea meets the luscious hill, and the wide network of the backwater dominates a good portion of landscapes. It has beaches, hill stations, waterfalls, backwater - in short everything that tourists look for in an ideal honeymoon.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/kerala/image/kerala-honeymoon2.webp'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/kerala/image/spices-of-kerala-tour1.webp'/>
       </div>
       <div>
       <h3>Kerala Spices & Plantation Tour</h3>
      
        <div className={Styles.textt}>
            <p>Kerala, the beautiful state of India, is enriched with plenty of spices. Along with the tea and coffee plantations, you can also get a wonderful chance to marvel at the plantations of different spices, popular all around the world. Embark on a Kerala spice tour with our 8 days and 7 nights holiday package and experience the spicy fragrance of Kerala along with magnificent locations that envelop them like Cochin, Munnar, Thekkady and Alleppey. Be it visiting the majestic Cochin Fort or a pleasurable ride in the houseboats, we let you explore the vibrant culture of Kerala</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Kerala