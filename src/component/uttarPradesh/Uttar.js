import React from 'react'
import Styles from "./uttar.module.css"
import { Swiper, SwiperSlide } from "swiper/react";
import p1 from "./pic/p1.jpg"
import p2 from "./pic/p2.jpg"
import p3 from "./pic/p3.jpg"
import p4 from "./pic/p4.jpg"
import p5 from "./pic/p5.jpg"
import p6 from "./pic/p6.jpg"
import p7 from "./pic/p7.jpg"
import p8 from "./pic/p8.jpg"
import p9 from "./pic/p9.jpg"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";

const Uttar = () => {
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
      <br/>
      <br/>
    <div className={Styles.container}>
  <div className={Styles.main}>
  <div className={Styles.text}><h1  >Adventure Tourism in Uttar Pradesh</h1></div>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2>Tourism in Uttar Pradesh</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Uttar Pradesh</h3>
            <p>Uttar Pradesh conjures an image of acres and acres wide swaying fields; ancient Hindu temples on the bank of meandering rivers; and towns and cities with narrow alleys where a rich culture inhabits. Home to one of the world’s ancient most cities, and that of the iconic Taj Mahal; the origin place of two most prominent religions as well as of one of the important classical dance forms in India, Uttar Pradesh in North India is an unmissable holiday destination.</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>Uttar Pradesh is a significant destination for Buddhist and Jain followers as well, and thus the pilgrims have the chance to pay homage to important religious centres like Sarnath and Kushinagar. The cultural alleys of Uttar Pradesh are equally heartwarming, where on one hand the food, of the variety of biryani to kebabs to korma and sweets keeps you satiated, the brass and bronze ware from Moradabad, the bangles and glassware from Firozabad, locks from Aligarh, and the zardozi and silk sarees from Varanasi have enough to win accolades. Uttar Pradesh is also the origin centre of one of the eight classical dances in India - Kathak eventually making the state one of the prominent cultural centres in the country.</p>
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
        <img height="100%" width="100%" src='https://media.istockphoto.com/id/865075520/photo/holy-town-varanasi-and-the-river-ganges.jpg?b=1&s=170667a&w=0&k=20&c=vkXqPAntzwGMW7Voh9GQdPyblPblzKHXOw2xn0PTWf4=' />
       </div>
       <div>
       <h2>  VARANASI PILGRIMAGE TOUR</h2>
     
        <div className={Styles.textt}>
            <p>Give yourself a delightful treat of spirituality in Varanasi. Often reckoned amongst the world’s oldest cities, Varanasi is bliss for every traveller who wishes to learn about Hindu religion along with the culture and traditions. Our Varanasi pilgrimage tour covers all the popular religious sites that cannot be missed while vacationing in Varanasi. Vishwanath Temple, Annapurna Temple, Sankat Mochan, Manas Mandir and Bharat Mata Mandir are some famous religious sites in Varanasi that you will visit on this amazing excursion. Besides, the key highlight of the entire expedition is the much famous evening Ganga Aarti on the banks of Ganges River that you are going to be a part of.

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
       <h3>Love Symbol Taj Mahal</h3>
       <div className={Styles.textt}>
        <p> Taj Mahal, Agra is a tourist destination which has not only gained popularity amongst Indians but international tourists as well. A visit to Agra gives the tourists a sneak peek into architectural history. For those who have been planning for a Taj Mahal Darshan Tour in Agra along with other sightseeing places, our meticulously crafted Agra same day tour packages will let you explore the jewels of the city. Right from visiting the UNESCO World Heritage Sites- Taj Mahal </p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://plus.unsplash.com/premium_photo-1661885523029-fc960a2bb4f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHRhaiUyMG1haGFsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
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
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/119164237/photo/india-agra-fort.jpg?b=1&s=170667a&w=0&k=20&c=6tvtRf_y_VzOefmBzVoIbSd0XMbyWuBjpj-DG8Rr064='/>
       </div>
       <div>
       <h3>Agra Fort Uttar Pradesh</h3>
        <div className={Styles.textt}>
    <p>Agra Fort, as we know it today, is a colossal masterpiece built by the most popular Mughal Emperor, Akbar in 1565 AD, followed by Shah Jahan. Prior to Akbar, the fort served as a residence of Babur, while Humayun was crowned as an emperor in it. It is one of the three UNESCO World Heritage Sites in Agra, apart from Taj Mahal and Fatehpur Sikri. This splendid monument is also known as Lal Qila and Qila-I-Akbari, because it is built out of red sandstone</p>
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
   <h3>   Bhakti Mandir </h3>
       <div className={Styles.textt}>
        <p>The divine deity of "Radha Krishna" in Bhakti Mandir is so mesmerizing that tens of thousands of devotees from all over the world visit for darshan on a regular basis. Level 1 (Ground Floor) of Bhakti Mandir is where 'Radha Krishna' idol is placed. The darshan of "Radha Krishna" in Bhakti Mandir appears exactly the same as in Prem Mandir, Vrindavan.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://media.istockphoto.com/id/1265054638/photo/prem-mandir-temple-in-vrindavan-mathura-india.jpg?s=612x612&w=0&k=20&c=m6eYEKUv9hIjOEkT6LycY0h00IUhayEcqzZIXjpiDCU='/>
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
        <img height="100%" width="100%"  src='https://www.tourmyindia.com/states/uttarpradesh/images/sheesh-mahal-agra.jpg' />
       </div>
       <div>
       <h3>Sheesh Mahal Agra</h3>
        <div className={Styles.textt}>
            <p>The most important question here is: why is it called the Sheesh Mahal, or, the Palace of Mirrors? The reason is the wide use of mirrors both in its walls and ceilings. When illuminated, they would lend a sparkling effect to the entire palace. Abdul Hamid Lahauri, Shah Jahan’s historian, wrote that these fascinating mirrors were brought from Haleb (Aleppo, Syria) specially for this purpose. For this reason, he also referred to this structure as "Shishaye Halebi".</p>
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
       Ayodhya
       <div className={Styles.textt}>
        <p>Located on the east bank of River Saryu, Ayodhya is brimming with the remnants of a bygone era. The famous epics, Ramayan and ShriRamcharitmanas exhibit the splendour of Ayodhya.

An episode of Ramayan, a page of ancient history and a cluster of tourist attractions, this town has been a major centre for pilgrims, historians, archaeologists and students alike..</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://media.istockphoto.com/id/1324190796/photo/hindu-temple.jpg?b=1&s=170667a&w=0&k=20&c=BLfAO9KmJfP0Xz53aW5IFNToIJAEskdJNn21vfUIEJo='/>
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
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/1402458243/photo/prem-mandir-krishna-temple-vrindavan.jpg?b=1&s=170667a&w=0&k=20&c=-CsxHKN6Qq6jjVzVhSLZS1oDmZOYiEQ39VV2O6YzRX8='/>
       </div>
       <div>
       <h3> Mathura</h3>
      
        <div className={Styles.textt}>
            <p>Mathura is a holy city for Hinduism, the world’s third-largest religion. There are many places of historic and religious importance in Mathura and its neighbouring towns. The twin-city to Mathura is Vrindavan. As the home of Krishna in his youth, the small town is host to a multitude of temples belonging to various sects of Hinduism proclaiming Krishna in various forms and avatars. Some places of interest are:</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
    </>
  )
}

export default Uttar;