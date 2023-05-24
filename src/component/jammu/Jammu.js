import React from 'react'
import Styles from "./jammu.module.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";


import k1 from "../picc/p1.jpg"
import k2 from "../picc/p2.jpg"
import k3 from "../picc/p3.jpg"
import k4 from "../picc/p4.jpg"
import k5 from "../picc/p5.jpg"
import k6 from "../picc/p6.jpg"
import k7 from "../picc/p7.jpg"


const Jammu = () => {
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
        <SwiperSlide><img src={k1} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={k2} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={k3} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={k4} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={k5} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={k6} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={k7} className='carouselImg' /></SwiperSlide>
       
  
      </Swiper>
      <br/>
      <br/>
    <div className={Styles.container}>
  <div className={Styles.main}>
  <div className={Styles.text}><h1  >Adventure Tourism in Jammu & Kasmir</h1></div>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2>Tourism in Jammu & Kasmir</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Jammu & Kasmir</h3>
            <p>Known as Heaven on the Earth, Jammu & Kashmir is where Mother Nature has bestowed all her love. Enclosed by the Himalayas and Karakoram ranges; and festooned with verdant meadows, lush valleys, dense forests, splendid temples, this new union territory of India is a holiday destination to instantly fall in love with.

Being an ideal tourist destination for family tours, honeymoon tours and the perfect place for adventure enthusiasts, Jammu & Kashmir offers abundance tour options for travellers of all kind.

The picturesque Jammu & Kashmir is even home to the popular Hindu shrines like Mata Vaishno Devi and Baba Amarath Cave, this place is always on the radar of pilgrimage tourists from all over the world.

The majestic valleys of Kashmir offer adventure opportunities like trekking and skiing. The serene destination is also famous for experiential travels in the form of either a stay at a houseboat or Shikara ride on Dal and Nigeen Lake. Nothing can beat the beauty of Jammu & Kashmir, and to believe it, one has to see it!</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>Attracting millions of tourists every year from India as well abroad, Jammu & Kashmir has a lot of activities for its visitors to choose from. The fun & adventure never ends in the union territory that invites tourists to enjoy the finest skiing adventure in Gulmarg, horse riding along the countryside, trekking to its alpine lakes, and camping on its lush meadows.

J&K also offers an opportunity to enjoy the best in class trout fishing, mountain biking on its rugged terrains, and of course the much anticipated shikara ride in Srinagar.</p>
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
        <img height="100%" width="100%" src='https://media.istockphoto.com/id/665366534/photo/gandola-cable-car-in-gulmarg.jpg?b=1&s=170667a&w=0&k=20&c=RqVMvLuuoQ35k8Ya7x-mOVlnURJOCJMweLw0GnaTaVY=' />
       </div>
       <div>
       <h2> About Gulmarg Tour Packages</h2>
     
        <div className={Styles.textt}>
            <p>If you have been planning an incredible family holiday or a honeymoon tour to Kashmir, then Gulmarg is a tourist destination in Kashmir that you should try exploring. It is also famously known as the top skiing destination in India, and is highly sought after by adventure enthusiasts. You should also not miss a ride on the incredible Gondola cable car. The second highest and second longest of its kind in India, it takes you quite close to the Apharwat Peak, while offering you breathtaking views of the mesmerising landscape below.

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
       <h3>About Horse Riding in Kashmir</h3>
       <div className={Styles.textt}>
        <p> Exploring the beautiful and eye-catching countryside on a horseback is a popular activity in Jammu & Kashmir. Horse riding is an ancient way of travelling around the gorgeous valleys and hilly places of Jammu & Kashmir. Today, a large number of tourists including the family vacationers and honeymoon couples utilize this opportunity to relish the unmatched natural beauty of the popular tourist attractions as well as some pretty lesser-known destinations as well. </p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://www.tourmyindia.com/states/jammu-kashmir/image/horse-riding-jk1.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/jammu-kashmir/image/best-of-kashmir-it1.jpg'/>
       </div>
       <div>
       <h3>About Srinagar Tour</h3>
        <div className={Styles.textt}>
    <p>A honeymoon tour to Srinagar, with its paradise-like beauty, is how a dreamy romantic getaway should look like. What is more romantic than taking a ride on a shikhara or staying in a houseboat? Just sit back, relax and watch the lovely views of the green mountains surrounding you on all sides, even as the gondola styled shikara graciously moves ahead on the clear waters of the famous Dal Lake.</p>
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
   <h3>  Kashmir Honeymoon Tour</h3>
       <div className={Styles.textt}>
        <p>Our Kashmir honeymoon tour package includes the topmost tourist destinations like Srinagar, where you can enjoy a romantic stay at a houseboat along with sightseeing of its top attractions like Mughal Gardens. This 6 nights and 7 days Kashmir honeymoon package further takes you to picture perfect Sonmarg where you can relish horse rides and sighting of Thajiwas glacier.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://www.tourmyindia.com/states/jammu-kashmir/image/romantic-kashmir-tour-it2.jpg'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/jammu-kashmir/image/magical-kashmir-it.jpg' />
       </div>
       <div>
       <h3>Magical Kashmir</h3>
        <div className={Styles.textt}>
            <p>The scenic vistas of rolling mountains, gurgling streams, azure lakes, lush meadows, and dense forests, make Kashmir no less than a magical destination in India. Therefore, this gorgeous place in India is a perfect getaway for family vacationers, honeymoon couples, as well as for travelling with friends.</p>
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
       Trekking in Kashmir
       <div className={Styles.textt}>
        <p>Kashmir, which has been called the Paradise on Earth, is also home to numerous treks on its alpine meadows and lakes making it a favourite destination in India for trekkers. We offer the best of Kashmir trekking experience for you with our specially designed trekking tour packages. Trek to the alpine lakes like Gangabal, Gadsar, Tarsar & Marsar, Great Lakes, and the ancient villages tucked away in the mountains like Naranag with our best trekking tour packages for Kashmir.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://images.unsplash.com/photo-1561123500-62f368245867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dHJla2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/jammu-kashmir/image/mountain-biking-kashmir.jpg'/>
       </div>
       <div>
       <h3> About Mountain Biking Adventure in Kashmir</h3>
      
        <div className={Styles.textt}>
            <p>The topography of Jammu and Kashmir is perfectly suited for mountain biking. Pedalling your way through the mountains of Kashmir Valley dotted with rich pine and deodar trees, is absolutely exhilarating and delivers the ultimate thrill. What also makes mountain biking in Jammu and Kashmir so exciting is the gorgeous landscape of this region, as it is dotted with water streams, paddy fields, meadows, village markets and woods.</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Jammu;