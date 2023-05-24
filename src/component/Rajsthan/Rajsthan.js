import React from 'react'
import Styles from "./rajsthan.module.css"


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

const Rajsthan = () => {
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
  <div className={Styles.text}><h1  >Adventure Tourism in Rajasthan</h1></div>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2> Rajasthan Tourism</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Rajasthan Tourism</h3>
            <p>Rajasthan is a state of vibrant folk dance and music, gigantic forts and palaces, spicy food, colourful and large turbans, extensive golden sand desert, camels and rich handicraft. It is therefore, an incredible place to visit in India for enjoying unforgettable holidays. Sprawling in an area of 342239 sq km, Rajasthan is perfect for history buffs, culture aficionados, adventure lovers, wildlife enthusiasts, family vacations, honeymoon, and more.</p>
        </div>
        <div>
            <h3>Architectural Splendour: Forts, Palaces & Havelis!</h3>
            <p>The major tourist attraction of Rajasthan are its havelis, palaces and forts that add to the experience of exploring one of the historically wealthy states in India. Some of the most famous and most visited forts in Rajasthan are Chittorgarh, Mehrangarh, Jaisalmer, Jaigarh and Junagadh Forts. Of these, the Mehrangarh Fort in Jodhpur is spread over 5 kilometers and stands on a hill almost 125 kilometers high. Chittorgarh Fort is also a must visited tourist attraction, as it’s the largest fort in Asia. It is spread over an area of 700 acres, extending to 3 km in length and 13 km in peripheral length.</p>
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
        <img height="100%" width="100%" src='https://www.tourmyindia.com/images/hawa-mahal-fort-jaipur.jpg' />
       </div>
       <div>
       <h2>  Hawa Mahal Jaipur</h2>
     
        <div className={Styles.textt}>
            <p>Located at a stone throw away from the commercial center of Pink City, Hawa Mahal is considered as the landmark of Jaipur. Known as the 'Palace of winds", this five story building was built in 1799 by Maharaja Sawai Pratap Singh. This palace is decorated with 953 windows or 'Jharokhas' which are adorned with intricate designs. There's a small museum within the complex of Hawa Mahal, which houses famous items like miniature paintings and ceremonial armor.

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
       <h3>Jantar Mantar Jaipur</h3>
       <div className={Styles.textt}>
        <p>Witness the world's largest sundial at Jantar Mantar. Considered as one of the largest observatories in the world, Jantar Mantar is listed in UNESCO's world heritage sites as well. This place is renovated every year by the government to offer precise measurements of time, declination of the sun and the positions of constellations, along with several other astronomical phenomena.</p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://www.tourmyindia.com/images/jantar-mantar-jaipur-r.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/rajasthan/image/3nights-4days-golden-triangle-tour3.webp'/>
       </div>
       <div>
       <h3>Golden Triangle Tour</h3>
        <div className={Styles.textt}>
    <p>One of the most renowned traveler circuits in India, Golden Triangle tour consists of three cities of North India - Agra, Jaipur and Delhi. These cities offer you an opportunity to experience the architectural, cultural and ancient heritage. Make the most of your holidays in these cities by getting the best Golden Triangle tour Packages from Tour My India. From the bustling bazaars and monuments of Delhi, sight of the magnificent Taj Mahal at Agra to royal buildings and exquisite havelis at Jaipur, our packages are fully customized to cater to the needs of every traveler.</p>
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
   <h3>    Bikaner</h3>
       <div className={Styles.textt}>
        <p>Vibrant deserts, fabulous forts, desert safaris make Bikaner a blooming beauty in the Thar desert. The city is adorned with gigantic and spectacular forts and palaces that tell the world about the opulence of its rulers. Such strong are these forts that even after so many years of their construction, they stood tall unspoiled and withstood the passage of time. Apart from the historical vestiges, the city is the center of attraction for food lovers due to its yummy snacks.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://images.unsplash.com/photo-1514007631454-28669d6cc960?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmlrYW5lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/rajasthan/image/camel-safari-tour1.webp' />
       </div>
       <div>
       <h3>Rajasthan Camel Safari</h3>
        <div className={Styles.textt}>
            <p>There is no spectacular and unique way to explore the rustic desert culture of Rajasthan than the camel safari expedition. The northwestern state of Rajasthan is blessed with the awe-inspiring Thar Desert that tenders some remarkable experiences of camel safaris together with cherished glimpses into the exquisiteness of avid deserts and its precious treasure troves of melody, dance and natural panoramas.</p>
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
       Wildlife in Rajsthan
       <div className={Styles.textt}>
        <p>An affluent wildlife is the highlight of the verdant green state of Uttarakhand. What seem to be the dense forests of Oak and Deodar are actually, the homeland to varied number of recognizable and unknown trees and plants. Mostly habituated by innumerable wild species of animals of which Tiger is most prominent, the state is certainly amongst the finest places for wildlife tourism in India. The state also boasts a high number of birds that nest in varied trees and with their sweet chirps add melody to the surreal ambiance.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://images.unsplash.com/photo-1614027754573-c648f6997b49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHdpbGRsaWZlJTIwcmVzZXJ2ZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
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
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/186909638/photo/moosi-maharani-chhatri-alwar-rajasthan-india.jpg?s=612x612&w=0&k=20&c=na78OKRdJ4-xEB4n6m3E2S9gEqtqlx5NwJoNBl1JVuM='/>
       </div>
       <div>
       <h3>Alwar Travel</h3>
      
        <div className={Styles.textt}>
            <p>In the lap of green hills of Aravalli ranges nestles the beautiful Alwar that has been left replete with exquisite forts, unexplored palaces, and miles of barren land. An important place where many chapters of Rajput history has unfolded, Alwar is an architectural gem of Rajasthan. It's a graceful combination of nature, ancient history, Indian art, and culture unlike any other place in Rajasthan makes Alwar a popular tourists destination.</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Rajsthan