import React from 'react'
import Styles from "./uttarakhand.module.css"



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

const Uttarakhand = () => {
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
  <div className={Styles.text}><h1  >Adventure Tourism in Uttarakhand</h1></div>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2>Tourism in Uttarakhand</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Uttarakhand</h3>
            <p>Devbhoomi Uttarakhand is the state in India one can easily fall in love with. The surreal landscape that comprises lofty Himalayas, glistening streams, eye-catching meadows, imposing glaciers and surreal lakes, all make Uttarakhand a coveted tourist destination in Indian Himalayas. The state is divided into two regions: Garhwal and Kumaon. Each of these offers plenty of opportunities for tourism, sightseeing, adventure and wildlife. Dotted with sacred Hindu temples and trekking trails, this North Indian state is a travel destination where along with seeking the blessing of the Almighty, one can indulge in adventure and recreational activities.</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>For those who seek adventure tourism, Uttarakhand offers some incredible trekking, mountain climbing, and white-water rafting opportunities. Uttarakhand is one of the best trekking destinations in India, with the famous treks in Uttarakhand are Auden’s Col, Kalindi Khal, Nag Tibba, Bedni Bugyal, Valley of Flowers, Chopta Chandrashila and many more.

Skiing enthusiasts also have a lot to look forward to in Uttarakhand, with Auli being one of the top skiing destinations in India. Camping is another popular adventure activity, with the top camping destinations being Jharipani, Dhanaulti, Kanatal and Corbett National Park.

Peak climbing enthusiasts can enjoy scaling the mountain peaks in the Garhwal Himalayas in both the Garhwal & Kumaon region, with the most climbed mountain peaks being Hathi Parbat, Nanda Devi, Chaukhamba, Kedar Dome and Bandarpoonch.

Mukteshwar, Bhimtal, Mussoorie and Pithoragarh are the top places where you can enjoy paragliding. Mountain biking in Uttarakhand is enjoyed at destinations like Rishikesh, Chopta and Lansdowne.</p>
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
        <img height="100%" width="100%" src='https://media.istockphoto.com/id/977364070/photo/rafting-on-a-mountain-river.jpg?b=1&s=170667a&w=0&k=20&c=m_1pFLH-UG2pUMwOFcXQgD_ZmLwn6Cq4ALw2YEy6Yn8=' />
       </div>
       <div>
       <h2>  Rafting in Uttarakhand</h2>
     
        <div className={Styles.textt}>
            <p>The land of turbulent as well as sacred rivers, Uttarakhand is a destination that offers best whitewater rafting experience in India. The popular amongst all being River Ganga that creates thrilling rapids in Rishikesh compelling adventure lovers to give rafting activity a shot. In Uttarakhand, the rafting grades range between I and V with Tons River having some really notorious rapids to face. The seasoned rafting enthusiasts can choose to check their skills in the Tons river where Mori is the spot to expect the major struggle and thrill. The stretch along Alaknanda, Dhauliganga, and Kali rivers also have several challenging rapids which lure the rafting enthusiasts.

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
       <h3>Trekking in Garhwal</h3>
       <div className={Styles.textt}>
        <p>Devbhoomi Uttarakhand is the address to many adventures that make for unforgettable experiences. The Himalayas that beautify the landscape of Uttarakhand are home to innumerable hiking & trekking trails, some popular and some, well are still its best kept secrets. Explore the Uttarakhand Himalayas, and challenge yourself while discovering the sites tucked away in the distant land with our expert trekking tour packages.</p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://media.istockphoto.com/id/1361421117/photo/hiking-couple-climb-up-mountain-ridge.jpg?b=1&s=170667a&w=0&k=20&c=sJ05T029lAitDCpfsHLhSpqR-rXbHrbw_9wmnLMmNdA='/>
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
        <img height="100%" width="100%"  src='https://images.unsplash.com/photo-1642774667024-e9e2f37914d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhcmlkd2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
       </div>
       <div>
       <h3>Haridwar</h3>
        <div className={Styles.textt}>
    <p>Elegantly situated on the bank of River Ganga at an elevation of 249.7 m above the sea level and a total area of 2360 sq km, Haridwar is the ‘Gateway to Garhwal Himalayas.’ This sacred city is like a magazine, in the pages of which interesting illustrations from history and modern life persuade travel aficionados from across the world. The city is the venue of Magh Mela every year, Kumbh Mela in every three years, Ardh Kumbh in every 6 years and the Maha Kumbh Mela in every 12 years.</p>
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
   <h3>    Waterfalls in Uttarakhand</h3>
       <div className={Styles.textt}>
        <p>Waterfalls in Uttarakhand, are the beautiful places from where you can frame a perfect picture of water descending from a height with the gushing sound of water. And that's not all because the picture can never be complete without the mighty snow-capped peaks of Uttarakhand, painted in the background. Most of these charismatic waterfalls are perfect for a short trek, away from the busy tourist attractions in Uttarakhand, whereas there are few like the Kempty Falls in Mussoorie that remain unbelievably crowded throughout the year.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://images.unsplash.com/photo-1534833697616-825d2698fa12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fEtFTVBUWSUyMEZBTExTfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/uttarakhand/image/skiing-auli.webp' />
       </div>
       <div>
       <h3>Auli Skiing Tour</h3>
        <div className={Styles.textt}>
            <p>Located at a height of 2500 - 3050 mts above sea level in Chamoli district of Garhwal region, Auli is a famous skiing destination of Uttarakhand state of India and has some of the most stunning slopes in the world that are ideal for winter skiing. It is counted among the most preferred choice among professional skiiers and adventure lovers from around the globe. The slopes in Auli are covered with Oak and Deodar forests, which helps skiiers by decresing the speed of chilling winds. The best time for skiing in Auli is from January to March.</p>
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
       Wildlife in Uttarakhand
       <div className={Styles.textt}>
        <p>An affluent wildlife is the highlight of the verdant green state of Uttarakhand. What seem to be the dense forests of Oak and Deodar are actually, the homeland to varied number of recognizable and unknown trees and plants. Mostly habituated by innumerable wild species of animals of which Tiger is most prominent, the state is certainly amongst the finest places for wildlife tourism in India. The state also boasts a high number of birds that nest in varied trees and with their sweet chirps add melody to the surreal ambiance.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://www.tourmyindia.com/packages-tour-india/corbett/images/wildlife-tour1.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/uttarakhand/images/badirnath-kedarnath-yatra.jpg'/>
       </div>
       <div>
       <h3>Pilgrimage in Uttarakhand</h3>
      
        <div className={Styles.textt}>
            <p>The pious Uttarakhand is dubbed the Land of the Gods, and indeed it is. This holy ground of the mighty Himalayas and the glistening Ganga and Yamuna is replete with pilgrimage sites that can offer both the blessings of the divine and the much-needed peace of mind. Uttarakhand is where the popular Chhota Chardham Yatra is performed at high altitude Hindu shrines of Badrinath, Kedarnath, Yamunotri, and Gangotri. It is also the land to witness the divinity at several river confluences or Prayag, which in number are five, and thus, called Panch Prayags</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Uttarakhand