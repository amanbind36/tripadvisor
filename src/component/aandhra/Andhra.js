import React,{useState} from 'react'
import Styles from "./andhra.module.css"


import pic01 from '../pic/BannerTelangana.jpg';
import pic02 from '../pic/MuseumsTel.webp';
import pic03 from '../pic/PalacesTelanagana.jpg';
import pic04 from '../pic/WaterfallsTelangana.jpg';
import pic05 from '../pic/ramuji.jpg';
import pic06 from '../pic/templeTelanglana.jpg';



import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";




const Andhra = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [mountain,setMountain]=useState(false);
  const [religious,setReligious]=useState(false)
  const [adventure,setAdventure]= useState(false)

  const handlePopular=()=>{
    setMountain(false)
    setIsVisible(true);
    setReligious(false)
    setAdventure(false)
  }
  const handleToggle = () => {
    setMountain(true)
    setIsVisible(false);
    setReligious(false)
    setAdventure(false)
  };
  const handleAdventure = () => {
    setAdventure(true)
    setMountain(false)
    setIsVisible(false);
    setReligious(false)
  };
  const handleReligious = () => {
    setReligious(true)
    setMountain(false)
    setAdventure(false)
    setIsVisible(false);
   
  };
  return (
    <>
    <div className={Styles.container}>
  <div className={Styles.main}>
  <div className={Styles.text}><h1  >Adventure Tourism in Andhra Pradesh</h1></div>

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
        <SwiperSlide><img src={pic01} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic02} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={pic03} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic04} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic05} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={pic06} className='carouselImg' /></SwiperSlide>
  
      </Swiper>

  </div>
    </div>
    <br/>
    <br/>
    <div className={Styles.tour}>
      <h2>Tourism in Andhra Pradesh</h2>
      <div className={Styles.about}>
        <div>
            <h3>About Andhra Pradesh</h3>
            <p>Blessed with two beautiful rivers, Krishna and Godavari, Andhra Pradesh has the Bay of Bengal to its west, and it boasts of a coastline of 972km, the longest in the country. This state is widely advertised as the Kohinoor of India by the tourism department. The state is most visited for its world famous Tirupati temple. Srisailam Mallikarjuneswar temple is another famous Shiva shrine and is one of the 12 Jyotirlinga temples in India.</p>
        </div>
        <div>
            <h3>Plenty of adventure to be had!</h3>
            <p>
The Vijayanagara dynasty can be credited for constructing some breathtaking structures in the state like Srisailam and Lepakshi temples. One of the famous mosques in the state is the Shahi Jamia Masjid in Adoni of Kurnool district. Rajahmundry city, located on the banks of Godavari River is one of the main attractions of the city. Likewise, Kolleru Lake is one of the largest freshwater lakes in India located in the state of Andhra Pradesh. A trip to this state will leave you completely mesmerised. </p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
      <div className={Styles.places}>
      <button onClick={handlePopular}>Popular Places</button>
     <button onClick={handleToggle}>Hill Stations</button>
     <button onClick={handleReligious}>Religious Places</button>
     <button onClick={handleAdventure}>Adventure Places</button>
      </div>
      <hr/>
    </div>



    <br/>
      <br/>
      <br/>
    <br/>
      <br/>
      <br/>
      {isVisible && <div> 
        <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%" src='https://media.istockphoto.com/id/1268716417/photo/misty-tirupathi.jpg?b=1&s=170667a&w=0&k=20&c=0vf7hLEbN9n_VKNSMNh1Z9H2iaBXerUKgJNDFyY7bWA=' />
       </div>
       <div>
       <h2> Tirupati Tourism</h2>
     
        <div className={Styles.textt}>
            <p>ituated in the Chittoor district of Andhra Pradesh, Tirupati is known for Lord Venkateshwara Temple, one of the most visited pilgrimage centers in the world. It is also one of the world's richest temples known by different names - Tirumala Temple, Tirupati Temple, and Tirupati Balaji Temple. Tirumala is one of the seven hills in Tirupati, where the main temple is located. The temple is believed to be where Lord Venkateshwara took the form of an idol and is home to the deity Govinda. Tirupati is one of India's oldest cities and is mentioned in many ancient Vedas and Puranas.

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
       <h3>Amaravathi Tourism</h3>
       <div className={Styles.textt}>
        <p>Known as the Capital of Andhra Pradesh, Amaravathi is a planned city on the banks of the River Krishna. Amaravathi is renowned for being a site of a Buddhist Stupa that is a semi-hemispherical structure containing Buddhist relics and often called the Abode of God. </p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://media.istockphoto.com/id/683979926/photo/125-feet-high-dhyana-buddha-statue-on-bank-of-river-krishna-where-historic-stupa-was-built-in.jpg?b=1&s=170667a&w=0&k=20&c=zjTdj-GuHZbZtKHgq72NCiNXX80WpSTuLxcGI5s_sxI='/>
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
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/1166001054/photo/virupaksha-hindu-temple-gopuram-captured-from-hemakuta-hill.jpg?s=612x612&w=0&k=20&c=eHgjjYRyK3DStKIUtaFTsNdOfO9-yygUFuG9i0Yo9pU='/>
       </div>
       <div>
       <h3>Vijayawada Tourism</h3>
        <div className={Styles.textt}>
    <p>Nestled on the banks of River Krishna in the state of Andhra Pradesh, Vijayawada is the second-largest populated city in the state. Known as the ‘commercial, political and media capital of Andhra Pradesh’, the city is one of the most rapidly growing urban cities in India. Covered by hills and canals, Vijayawada is also home to numerous caves and rock-cut temples carved out of these caves.</p>
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
   <h3>   The Heritage Haven of Andhra"</h3>
       <div className={Styles.textt}>
        <p>Anantapuram is the headquarters of Anantapur District in the Indian state of Andhra Pradesh. Anantapuram is not a cosmopolitan city. Neither is it a village. It is one of those towns in transition, that is at the confluence of the past and the future. Anantapuram reverberates with flashes of India's glorious history and the true ethnic traditions and values of India. Interestingly, Anantapur receives the second-lowest rainfall in India.</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://media.istockphoto.com/id/481950558/photo/the-old-temple-in-bagan-myanmar-burma.jpg?s=612x612&w=0&k=20&c=Eswd5MQbY3sXuGo7EomPRFDyi2bTJRxtYQcB_SLx1d0='/>
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
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/466328210/photo/srisailam-jyotirlinga-temple.jpg?b=1&s=170667a&w=0&k=20&c=vdZiywwNK841Rr5au6e0wP4Et6UlpIMs9P5MFcO0D5E=' />
       </div>
       <div>
       <h3>Srisailam Tourism</h3>
        <div className={Styles.textt}>
            <p>Srisailam, a hill town in Kurnool district of Andhra Pradesh is home to the holy Malikarjuna Jyotirlinga and also as one of the eighteen Shakti Peethas of goddess Parvati. Situated on the banks of river Krishna, Srisailam is identified with a wildlife sanctuary and a dam. </p>
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
       Lepakshi Tourism
       <div className={Styles.textt}>
        <p>Lepakshi is a small quaint village with a trail of several great kingdoms that once ruled the area. Located in the Anantpur district of Andhra Pradesh, Lepakshi is located at a distance of 120 km from Bangalore making it a great choice for one day trip. Founded in 1535 AD by Maharaja Aliya Rama Raya of the Vijayanagara empire, Lepakshi is a trove of several fascinating archaeological sites, beautiful ancient temples and rich culture.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://media.istockphoto.com/id/1390023980/photo/beautiful-stone-carved-huge-nagalingam-lepakshi-temple-stone-carved-nagalingam-eighteen-feet.jpg?b=1&s=170667a&w=0&k=20&c=TNC0opfnKgJie3G5GG7aYIGQpcAdnSudjlIwTaeSNsc='/>
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
        <img height="100%" width="100%"  src='https://media.istockphoto.com/id/519886489/photo/tower-of-victory-chittorgarh-fort-rajasthan-india.jpg?s=612x612&w=0&k=20&c=eeqiHdKgxbse11xaLWK7-hfeBRdztEP980yHaBaq5g4='/>
       </div>
       <div>
       <h3>Chittoor Tourism</h3>
      
        <div className={Styles.textt}>
            <p>Steeped in religion, devotion and architecture, Chittoor is a place that everyone should visit at least once in their lifetime.

Also blessed with scenic beauty, cascading waterfalls and a beautiful hill station, Chittoor is not a disappointment to the traveller who seeks redemption from the busy metro life. Also known as the Mango City, Chittoor offers myriad varities of heavenly mangoes to please its visitors.</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/></div>}








      {/* //Mountain */}
      {mountain && <div>
      
      
        <div className={Styles.abouta}>
        <div>
            <h3>About Andhra Pradesh Hill station</h3>
            <p>If you are planning to visit a hill station this summer, then Andhra Pradesh can be the perfect getaway. This beautiful state has some of the most mesmerizing hill stations in the entire Indian subcontinent. These beautiful hill stations in Andhra Pradesh are a blessing to the tourists and all the local Andhra people, because they surely do help you get rid of the scorching city heat.

The hill stations feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best hill destinations in the state.</p>
        </div>
        <div>
            <h3>Top 9 Hill Stations In Andhra Pradesh</h3>
            <p>
            If you ever want to enjoy lush greenery or explore hiking trails in Andhra Pradesh, then remember you have a variety of options here. Here is a list of all the beautiful and famous hill stations in Andhra Pradesh that you should note down in your travel journal. Visit any of these places for your next getaway in the state.
<ol>
  <li>Araku Valley – Enigmatic & Soul-Soothing</li>
  <li>Horsley Hills – Different Sense Of Aura</li>
  <li>Nallamala Hills – Largest Hill Station In Andhra</li>
  <li>Lambasingi – Kashmir Of Andhra Pradesh</li>
  <li>Ananthagiri Hills – Teeming With Wildlife</li>
  <li>Swamimalai Hills – Hiker’s Haven</li>
  <li>Nagari Hills – Perfect Weekend Getaway</li>
  <li>Papikondalu – Expect The Unexpected</li>
  <li>Nagalapuram – A Small Yet Elegant Town</li>
</ol>



</p>
        </div>
      </div>
      <br/>
      
      
      
      
       <div className={Styles.ad}>
       <div>
        <img height="100%" width="100%" src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Araku_Valley.jpg' />
       </div>
       <div>
       <h2> Araku Valley – Enigmatic & Soul-Soothing</h2>
     
        <div className={Styles.textt}>
            <p>One of the most famous places to visit in Andhra Pradesh, Araku Valley is an enigmatic location where you can rejuvenate your mind and relax in the most amazing manner. The hill station is surrounded by lush greenery and natural flora and fauna. The soul-soothing climate of the Araku Valley makes it a tourist hotspot in Andhra Pradesh.

There are a series of caves, waterfalls, brooklets and many other natural features available in the area. The valley is located about 115 km from Vizag and is about 1300m from the ocean level. The area offers a number of physical activities that can be done.

The drive from the Ghat Street to the Araku is lined with beautiful landscapes making it a very attractive picnic spot for the locals. If you are wondering the best hill stations in Andhra Pradesh for family, Araku Valley is one of them.

</p>
<p>Must see places in Araku: Araku Tribal Museum, Borra Caves, Damku ViewPoint, Sangda Waterfalls.</p>
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
       <h3>2. Horsley Hills – Different Sense Of Aura</h3>
       <div className={Styles.textt}>
        <p>A small hamlet in the cluster of mountains and valleys the state of Andhra Pradesh, Horsley Hills have captivated the tourists for a long period of time. This particular place has a different sense of aura once again. Home to one of the wildlife sanctuaries in Andhra Pradesh, the wonderful hill station is covered with dense vegetation and rich flora and fauna.

Named after the then collector of Kadapa District – WD Horsley, this hilly location is situation 1,265 m from the sea-level. If you want to get away from the warm weather and hot heat waves, Horsley Hills seem to be a good option. There are a variety of things to do in Horsley Hills to have a memorable vacation. Make sure to trek and hike around the natural trails to experience the true beauty of the hill station and witness nature from very up close.</p>
<p>Must see places near Horsley Hills: Kaundinya Wildlife Sanctuary, Mallamma Temple, Tirupati</p>
       </div>
       </div>
       <div>
        <img  height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/horsley-hills.jpg'/>
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
        <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Nallamala_Hills_near_Srisailam_01.jpg'/>
       </div>
       <div>
       <h3>3. Nallamala Hills – Largest Hill Station In Andhra</h3>
        <div className={Styles.textt}>
    <p>Easily one of the top 10 hill stations in Andhra Pradesh, Nallamala Hills is the largest hill station in the whole of Andhra Pradesh. You’ll be surprised to know that the hills spread over 5 different districts. The hills have an elevation of 3608 feet and that makes it a candidate for one of the highest hill stations in the Indian subcontinent.

From pristine rivers, forests, valleys, orchards, and many other natural phenomenon to discover, Nallamala Hills is the perfect getaway for any adventurous person. The subtle climate and easy to navigate locations, makes your expedition more enjoyable. There are several home-stays and lodge available here.</p>
<p>Must see places in Nallamala Hills – Cumbum Lake, Srisailam Temple, Nagarjunasagar Srisailam Sanctuary</p>
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
   <h3>   4. Lambasingi – Kashmir Of Andhra Pradesh</h3>
       <div className={Styles.textt}>
        <p>An off-beat and romantic hill station, Lambasingi is easily one of the most sought-after hill stations in Andhra Pradesh for couples. Many a times this hill station is referred to as the “Kashmir of Andhra Pradesh” because of the heavenly landscape and superb natural fauna. The fresh and soothing atmosphere around the place makes it the perfect getaway from the daily life in the city.

The surrounding low lying moist deciduous forest cover helps to consistently maintain tranquilizing weather year-round. You will come across several plantations available in the area. Also, Lambasingi in summer is an absolute delight as it is one of the coolest places in Andhra Pradesh, with temperatures falling to as low as 0°C during the winter season.</p>
<p>Must see places in Lambasingi: Kothapally Waterfalls, Hope Island</p>
       </div>
       </div>
       <div>
        <img height="100%" width="100%" src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/lambasingi.jpg'/>
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
        <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Anantagiri_hills_Visakhapatnam.jpg' />
       </div>
       <div>
       <h3>5. Ananthagiri Hills – Teeming With Wildlife</h3>
        <div className={Styles.textt}>
            <p>One of the most popular hill stations in Andhra Pradesh, Ananthagiri Hills is around 10 km from Vikarabad. The hill station is surrounded at the base by the Osman Sagar and Himayat Sagar. It is noted for its dense jungle cover and magnificent views of the surrounding low lying areas.

The Musi River flows through the area and contributes to the verdant greenery and teeming wildlife in Ananthagiri. This hill station is a perfect destination for many hikers and trekkers who want to experience something adventurous.

You’ll come across a lot of medieval forts and old temples in Andhra Pradesh spread over the area which tells you that once, this area held significant importance in the history of South India and Andhra Pradesh. A road trip to Ananthagiri Hills is also a great idea to execute.</p>
<p>Must see places in Ananthagiri – Bhavanasi Lake, Araku Valley, Muchukunda River</p>
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
       <h3>6. Swamimalai Hills – Hiker’s Haven</h3>
       <div className={Styles.textt}>
        <p>Situated close to Tirupati, the Swamimalai Hills is a famous hill station in Andhra Pradesh that houses the highest peak of 4626 ft. above sea level, Yelagiri. Due to the significant height and mountainous features, the place is a great chance for hikers and trekkers to explore and experience the aura of this place.

Swamimalai Trek is a popular trek nowadays and is commences from the Mangalam Village that is around 3.5 kilometres from Punganoor Lake. The trek is about 5-6 kms both uphill and downhill. From the moment you visit Swamimalai, you will be surprised to witness the scenic beauty of this place and the breathtaking scenery that is worth a picture.</p>
<p>Must see places in Swamimalai – Jalagamparai Falls, Perumal Temple, Nilavoor Lake, Velavan Temple and Fundera Park.</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/800px-Sri_Venkateswara_National_Park_Tirumala_Hills_01.jpg'/>
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
        <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/MANGALAGIRI_HILL_ANDHRA_PRADESH_INDIA.jpg'/>
       </div>
       <div>
       <h3>7. Nagari Hills – Perfect Weekend Getaway</h3>
      
        <div className={Styles.textt}>
            <p>Located only to the North ot Nagari town, the Nagari Hills is the best hill stations in Andhra Pradesh to visit during the summers for a perfect getaway from the scorching heat. The highest peak of this hill is situated at a height of 855 m from the sea level.

The charming beauty and panoramic views of the hill station makes Nagari Hills one of the best valleys in Andhra Pradesh during summers. This place attracts a lot of photographers and nature enthusiasts from all over the country. Nagari Hills is often known for being a great picnic spot for the locals in the area.</p>
<p>Must see places near Nagari: Kaundinya Wildlife Sanctuary, Tirupati, Gurramkonda Fort.</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <div className={Styles.ad}>
       <div>
       <h3>8. Papikondalu – Expect The Unexpected</h3>
       <div className={Styles.textt}>
        <p>What you expect from a hill station, you get at Papikondalu. A serene and magnanimously beautiful hill station, Papikondalu is covered with Papi hills, rain forests and the mighty Godavari river flowing through the place. The forests have plenty of trekking tails, camping grounds and waterfalls that flow across the valley. The lovely scenery and peaceful atmosphere makes Papikondalu a must visit hill station.

You must definitely boat from Rajahmundry or Bhadrachalam in the small streams to get the true essence of Papikondalu’s landscape. Do opt for a resort stay amidst the lush green forests for a satisfying vacation.</p>
<p>Must see places in Papikondalu: Papikonda National Park, Munivaatam waterfall, Pattiseema, Perantallapalli village, Gandi Pochamma Temple, Papi hills, Jamalapuram Temple</p>
       </div>
       </div>
       <div>
       <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Papikondalu_21st-Jan.jpg'/>
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
        <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/05/Nagalapuram.jpg'/>
       </div>
       <div>
       <h3>9. Nagalapuram – A Small Yet Elegant Town</h3>
      
        <div className={Styles.textt}>
            <p>Nagalapuram is a very small town situated in Chittoor district and popular for its temples, waterfalls, trekking routes and vast forests. Trekking is the most popular activity undertaken by tourists visiting Nagalapuram. The glory of the place lies in the lush green hills and natural beauty that comes with it. 

A true paradise for adventure seekers, Nagalapuram is one of the best offbeat adventure destinations in Andhra Pradesh. It’s popular but not frequently visited therefore with an immense potential for a secluded time within the natural settings.</p>
<p>Must see places in Nagalapuram: Nagalapuram falls, Vedanarayana Swamy temple, Sri Pallikondeswara Swamy Temple, Kailasakona Waterfalls, Ubbalamadugu Falls</p>
        </div>
       </div>
      </div>
      <br/>
      <br/>
      <br/>
      </div>}






      {/* religious places */}
     





      {religious && <div>
      
      
      <div className={Styles.abouta}>
      <div>
          <h3>About Andhra Pradesh Religious Places</h3>
          <p>If you are planning to visit a  Religious Places , then Andhra Pradesh can be the perfect getaway. This beautiful state has some of the most mesmerizing  Religious Places in the entire Indian subcontinent. These beautiful  Religious Places in Andhra Pradesh are a blessing to the tourists and all the local Andhra people, because they surely do help you get rid of the scorching city heat.

The  Religious Places feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best  Religious Places destinations in the state.</p>
      </div>
      <div>
          <h3>15 Temples In Andhra Pradesh You Cannot Afford To Miss In 2023!</h3>
          <p>
          Being the fourth largest state in the country, Andhra Pradesh in the southeastern coast of the country attracts thousands of tourists every year because of its ancient architecture and rich cultural heritage. With its spectacular skyline, Hyderabad is home to stunning domes and minarets. During your visit, you will be able to experience intricate structures at the temples in andhra pradesh. Have a look at some of the most visited temples in Andhra Pradesh.


</p>
      </div>
    </div>
    <br/>
    
    
    
    
     <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%" src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Kanaka_Durga_Temple.jpg' />
     </div>
     <div>
     <h2> 1. Kanaka Durga Temple</h2>
   
      <div className={Styles.textt}>
          <p>Located in Vijayawada, Kanaka Durga Temple is one of the most famous temples in Andhra Pradesh. Kanaka Durga at temple on the Indrakeeladri hill is said to be self-manifested. Often considered as the presiding deity of Vijayawada, Kanaka Durga is found to be mentioned in the sacred texts as the Goddess of Power. Kanaka Durga Temple is believed to be built by Arjuna for Goddess Durga. Holding significant spiritual significance, this temple has been mentioned in Shiva-Leela and Shakti-mahimas as well. This undoubtedly tops the list of the best temples in Andhra Pradesh.

</p>
<p>Location: Arjuna Street Mallikarjunapeta Indrakeeladri, Vijayawada, Andhra Pradesh 520001</p>
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
     <h3>2. Siva Mallikarjuna Temple</h3>
     <div className={Styles.textt}>
      <p>Located on the Nallamala Hills in Srisailam, Siva Mallikarjuna Temple is one of the twelve jyotirlingas of Lord Shiva that you will find in India. Holding importance to two Hindu sects i.e. Shaivam and Shaktam, this temple is also known for being one of the eighteen Shakti peethas of Goddess Parvati. At this temple, you will find Shiva represented as Mallikarjuna and Parvati as Brahmaramba. It tops the list of the most famous temples in Andhra Pradesh because of being one of the three temples that have jyotirlinga and is revered as Shaktipeeth.</p>
<p>Location: Srisailam, Andhra Pradesh 528102</p>
     </div>
     </div>
     <div>
      <img  height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Siva-Mallikarjuna-Temple.jpg'/>
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
      <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Veerabhadra-Temple-Lepakshi.jpg'/>
     </div>
     <div>
     <h3>3. Veerabhadra Temple, Lepakshi</h3>
      <div className={Styles.textt}>
  <p>Lepakshi temple in Andhra Pradesh is known for being embellished with rich architecture and intricate arts. Located in Anantapur district, this temple takes pride in being home to one of the largest nandi statues in the country. The nandi statue here is made of granite and is monolithic. Constructed in the 16th century, this temple adorns itself with Vijayanagara style of architecture. The carvings and paintings will leave you speechless at the Lepakshi temple in Andhra Pradesh. According to Skanda Purana, this temple is believed to be one of the divya kshetram.</p>
<p>Location: Lepakshi, Andhra Pradesh 515331</p>
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
 <h3>   4. Tirumala Venkateswara Temple</h3>
     <div className={Styles.textt}>
      <p>Known for being the richest Hindu temple in the world, Tirumala Venkateswara Temple is a Vaishnavite temple located in Chittoor district. Tirupati balaji temple in andhra pradesh is dedicated to Venkateswara who is said to be an incarnation of Lord Vishnu. Often recognized as Temple of Seven Hills, this temple adorns itself with Dravidian architecture. You will find the Vaikhanasa Agama tradition of worship to be followed here. Tirupati balaji temple in andhra pradesh is also known for being one of the eight Vishnu Swayambhu Kshetras. This temple is listed as the last earthly Divya Desam as well.</p>
<p>Location: S Mada St, Tirumala, Tirupati, Andhra Pradesh 517504</p>
     </div>
     </div>
     <div>
      <img height="100%" width="100%" src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Tirumala-Venkateswara-Temple.jpg'/>
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
      <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Yaganti-Temple.jpg' />
     </div>
     <div>
     <h3>5. Yaganti Temple</h3>
      <div className={Styles.textt}>
          <p>Being one of the top 10 temples in andhra pradesh, Yaganti Temple is devoted to Lord Shiva. Located in Kurnool district, this temple this temple was constructed according to Vaishnavite traditions. Constructed by King Harihara Bukka Raya in the 15th century, this temple has a Pushkarini, Agastya Cave, Venkateswara Cave, and Veera Brahmam Cave. Sage Agasthya is said to have bathed in Pushkarini before worshipping the Lord Shiva. Many believe that bathing at the Pushkarini to be beneficial.</p>
<p>Location: Temple Gopuram, Yaganti Rd, Yaganti, Andhra Pradesh 518124</p>
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
     <h3>6. Ahobilam Temple</h3>
     <div className={Styles.textt}>
      <p>Located in the Eastern Ghats of the Kurnool district, Ahobilam Temple is one of the most visited temples in andhra pradesh. Being one of the 108 Divya Desams, this temple is believed to be the place where Hiranyakasipu was killed by the Lord. This place is also known as the Nava Narasimha Kshetra because of Lord Narasimha being worshipped at different temples located in the close proximity of the main temple. You will be able to find nine different forms of Lord Narasimha in Ahobilam. Some of the temples here will require you to trek through rocky paths.</p>
<p>Location: Brahmamgari Matam, Ahobilam, Andhra Pradesh 516503</p>
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Ahobilam-Temple.jpg'/>
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
      <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2020/01/Simhachalam-Temple.jpg'/>
     </div>
     <div>
     <h3>7. Simhachalam Temple</h3>
    
      <div className={Styles.textt}>
          <p>Known for being one of the most visited temples in andhra pradesh, Simhachalam Temple is dedicated to Lord Narasimha. Located on the Simhachalam hill in Andhra Pradesh, this temple in Visakhapatnam adorns itself with a fusion of architectural styles from Odisha, Chalukyas, and Cholas. You will find two temple tanks here i.e. Gangadhara and Swami Pushkarini. Being home to a number of sub-shrines as well as mandapams, this temple is one of the top 10 temples in andhra pradesh.</p>
<p>Location: Simhachalam Rd, Simhachalam, Visakhapatnam, Andhra Pradesh 530028</p>
      </div>
     </div>
    </div>
    <br/>
    <br/>
    <br/>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>8. Mallikarjuna Swamy</h3>
     <div className={Styles.textt}>
      <p>Resting at the southern bank of Krishna river, this temple is the main highlight of the town of Srisailam. One of the most celebrated places in the town, it has its roots attached to the past 6 centuries of India. Built by King Harihara Raya of Vijaynagar, this temple mesmerizes with its magnificent architecture and grandeur. As per the legends of the town, this temple has the idol of sage Bringi who was cursed by Goddess Parvati for worshipping Lord Shiva. According to the curse the sage was supposed to stand but Lord Shiva consoled the Goddess and gave him a third leg to stand comfortably. The temple also has idols of Nandi Sahasralinga and Nataraja.</p>
<p>Location: Srisailam, Andhra Pradesh 528101</p>
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Mallikarjuna-Swamy1-400x229.jpg'/>
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
      <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Kanipakam-Temple.jpg'/>
     </div>
     <div>
     <h3>9. Kanipakam Vinayaka Temple</h3>
    
      <div className={Styles.textt}>
          <p>This temple is the gem of Chittoor and was constructed around 11th century CE by Kulothunga Chola. The temple was later rebuilt by Vijayanagara rulers around the year 1336. The legends say that the idol of Vinayaka grows every year and the armour which was offered 50 years ago does not fit anymore. This historical temple worships Lord Ganesha as the primary deity and is also called the Shrine of water. This water in the complex is considered holy and cures many kinds of deformities.</p>
<p>Location: Main Road, Chittoor, Kanipakam, Andhra Pradesh 517131</p>
      </div>
     </div>
    </div>
    <br/>
    <br/>
    <br/>

    
    
   
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>11. Srikalahasti Temple</h3>
     <div className={Styles.textt}>
      <p>Located at a distance of 36 kms from Tirupati temple, the Srikalahasti Temple is one of the famous temples in Andhra Pradesh. The main deity in the temple is Lord Shiva and the Kalahasti temple holds much importance among the Hindu devotees. Built-in the year 1516 by Krishnadevraya, this temple has a beautiful entrance and intricate carvings that depict various Mythological illustrations. This is also called the Kashi of the South.</p>
<p>Location: Srikalahasti, Andhra Pradesh 517644</p>
     </div>
     </div>
     <div>
      <img  height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Sri-Kala-Hasti1-400x229.jpg'/>
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
      <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Ranganathswamy1-400x229.jpg'/>
     </div>
     <div>
     <h3>12. Ranganatha Temple</h3>
      <div className={Styles.textt}>
  <p>Resting at the banks of River Pennar, this temple is considered to be one of the most revered temples in Andhra Pradesh. Holding a great significance, this temple is called the oldest in the area and attracts devotees from various corners of the country. Boasting a beautiful architecture and exquisite carving there are seven gold pots inside the temple. These pots are adorned by huge mirrors that are within the premises.</p>
<p>Location: Srirangam, Tiruchirappalli, Tamil Nadu 620006</p>
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
 <h3>  13. Mangalagiri</h3>
     <div className={Styles.textt}>
      <p>This beautiful temple is located in Guntur in Seemandhra, Andhra Pradesh. The literal translation of the name is ‘the Auspicious Hill’. The temple is one of the 8 important Mahakshetrams and considered to be one of the sacred places in India. The Mangalgiri holds quite an importance in the Indian culture and it is believed that Lord Vishnu manifested himself in the soil of Mangalagiri and Goddess Lakshmi performed penance at the peak of the hill.</p>
<p>Location: Guntur, Seemandhara, Andhra Pradesh</p>
     </div>
     </div>
     <div>
      <img height="100%" width="100%" src='https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Mangalgiri-Temple1-400x229.jpg'/>
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
      <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Padmavathi-Ammavarthi1-400x229.jpg' />
     </div>
     <div>
     <h3>14. Sri Padmavathi Ammavari Temple</h3>
      <div className={Styles.textt}>
          <p>Situated at a few kilometers distance from the main city center, this temple is dedicated to Goddess Padmavathi. Considered to be one of the sacred places in Tirupati, this is the place that is home to many stories and legends. According to the local legends, Akasha Raja of Thondamandalam was performing a yajna and ploughed the earth to find a girl in a lotus flower. Later the girl married Lord Venkateshwara. This temple holds its own significance and devotees come from different places to offer their prayers.</p>
<p>Location: Sannidhi St, Tiruchanur, Tirupati, Andhra Pradesh 517503</p>
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
     <h3>15. Thousand Pillar Temple</h3>
     <div className={Styles.textt}>
      <p>This is an ancient temple which is located at a small town named Hanamkonda in Andhra Pradesh. The temple is home to around a thousand pillars, which are part or extensions of the adjacent pillars. The pillars are constructed in such a way it forms the walls of the temple. Made in the shape of a star, this temple is one of the famous pilgrimage centers which invites around 1000 devotees every day.</p>
<p>Location: 1000 pillars temple backside, Machili Bazar Rd, Hanamkonda, Telangana 506001</p>
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Thousand-Pillar-Temple1-400x229.jpg'/>
     </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
   <h4>This brings us to the end of our list of stunning temples in Andhra Pradesh. If you wish to go on a spiritual retreat then plan a trip to Andhra Pradesh and make sure you visit these architectural temples on your vacation!</h4>
   

    <br/>
    <br/>
    </div>}



    {/* Adventure */}





    {adventure && <div>
      
      
      <div className={Styles.abouta}>
      <div>
          <h3>About Andhra Pradesh Advanture to do</h3>
          <p>If you are planning to visit a Advanture  this summer, then Andhra Pradesh can be the perfect getaway. This beautiful state has some of the most mesmerizing  Advanture in the entire Indian subcontinent. These beautiful Advanture  in Andhra Pradesh are a blessing to the tourists and all the local Andhra people, because they surely do help you get rid of the scorching city heat.

The Advanture  feature soothing weather, verdant greenery, lush landscapes and a picturesque experience to the travellers. Then take a look at our list where we have mentioned the best hill destinations in the state.</p>
      </div>
      <div>
          <h3>8 Exciting Things To Do In Andhra Pradesh To Explore The State To The Fullest!</h3>
          <p>
          Andhra Pradesh is a magnificent place with a mix of landscapes that offers a lot many things for its visitors. You can go to temples, churches, mosques to celebrate the architecture that has been treasured in this place due to the kind of diversity in faith found here for ages. Explore museums and monuments and celebrate various fairs and festivals held in Andhra Pradesh from time to time. Andhra Pradesh is also known as the land of beaches, and you could spend a lavish evening looking at the sun setting at these beaches. The city is also known for shopping antiques and jewelry and many heritage tours are organized from time and again to keep its visitors engaged. Here is a list of all the things to do in Andhra Pradesh that will make your trip totally worthwhile!

</p>
<h3>Top 8 Things To Do In Andhra Pradesh</h3>
<p>Andhra Pradesh is a state that hides some of the most impeccable experiences. Here is a list of the top things that you should try when in the state.</p>
      </div>
    </div>
    <br/>
    
    
    
    
     <div className={Styles.ad}>
     <div>
      <img height="100%" width="100%" src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/Go-On-Vizag-City-Tour_18th-Dec.jpg' />
     </div>
     <div>
     <h2> 1. Go On Vizag City Tour</h2>
   
      <div className={Styles.textt}>
          <p>The tour is often organized by various tour companies. It’s an eight hours tour with on door pickup and drop facility. The tour covers the ocean museum, war museum, submarines and other top attractions of Vizag. The tour will start from the Simhachalam temple which is dedicated to Lord Narasimha (An incarnation of Lord Vishnu) and will guide through the submarine museum which includes a weapon package which hauls from sea to land. Then we visit the Vishaka Museum, which is a house of historical artifacts from the Kalingandhra region. The collection includes armors, crockery, coins, silk costumes, ancient jewelry, the skin of animals, various portraits and manuscripts, letters and maps from ancient times, warships, planes, and submarines.

</p>
<p>After completing the tour to Visakha Museum, you visit Tenneti Park and then explore Ramakrishna beach. This is a long and lovely beach that stretches across the sea and sands and houses a Kali Temple and a Ramakrishna Ashram. Also, you can visit here the War Memorial which was built in the memory of soldiers during the 1971 war. In the end, the tour operator will drop you at the prescribed location.</p>
<p>Location: Visakhapatnam, Andhra Pradesh</p>
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
     <h3>2. Go On Araku Valley Day Tour</h3>
     <div className={Styles.textt}>
      <p>The tour starts from the city center in Vizag city and takes you to Araku Valley via Tyda Valley. Araku Valley is also known as Andhra’s Ooty and shelters various tribal communities. The valley is spread in an area of 36 sq. km and is blessed with the best of climate and lush green lands, with natural streams and waterfalls which makes this place a mecca for any nature lovers. Araku Valley also has a tribal museum that showcases the lifestyle of the locals of this region and how it has evolved. After Araku Valley, the tour shall extend to Borra Caves, which are illuminated limestone caves at a height of 1400 meters above sea level. The caves are filled with fascinating stalagmites and stalactite formations.</p>
      <p>Some of these are even considered as an idol of Lord Shiva and people pray them religiously. There is a Gosthani cave flowing through these caves which impart another dimension to these caves. Four kilometers from Borra Caves, we have Katiki Waterfalls which is a sort of trek. However, when you reach this spot, the cool water splashing from the fall will help you realize the worth of every step that you have taken to reach this place. While coming back from Borra Caves, there will be a stoppage at Galikonda viewpoint which is one of the highest viewpoints of Visakhapatnam and provides one of the best views of the hills and cottages in the valley.</p>
<p>Location: Paderu, Andhra Pradesh</p>
     </div>
     </div>
     <div>
      <img  height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/Go-On-Araku-Valley-Day-Tour_18th-Dec.jpg'/>
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
      <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/Mayavi-Caves_02nd-jun.jpg'/>
     </div>
     <div>
     <h3>3. Mayavi Caves</h3>
      <div className={Styles.textt}>
  <p>Mayavi Caves are technical caves located in Kurnool in Andhra Pradesh. These beautiful caves are full of stalactites, stalagmites, flowstones and lots of shining minerals flowing through the caves. The caves are called technical caves because of few vertical sections present in the cave which require one to do rappelling for around 20 feet. The elevation of these caves is around 200 feet and involves around 1 km of hiking.</p>
  <p>The entrance of the cave is small and might give you claustrophobic vibes. You need to climb down around 15 feet from the entrance to reach the first horizontal surface. Then two more obstacles require you to ascend and then descend using ropes. Once you reach on the other side of the first obstacle people often feel uneasy and breathless because the air there is almost stationary.</p>
<p>Location: Kurnool, Andhra Pradesh</p>
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
 <h3>  4. Trek To Talakona Waterfalls</h3>
     <div className={Styles.textt}>
      <p>This would be one of the most adventurous treks you would have had in recent times. The path is adorned with amazing flora and fauna. As you trek through the difficult terrain to the falls, the chirping birds and praying insects tend to keep your brain busy and you do not get the essence of tiredness. The trek is in the Sri Venkateswara National Park in Chittoor district and fall is around 270 feet tall. The water falling from such a height leaves you speechless and gives you the worth of the trek to reach this location. The surroundings are covered in dense forests and lush green trees.</p>
      <p>Other things to do around the fall are to watch the endangered species which live in this forest-like squirrels, panthers, sambar, cheetah, and porcupines. There is also a facility to experience 240 meters of canopy rope walk which adds to your thrill of trekking in this place. There are mammoth trees around the location with various birds and monkeys and trek is an amazing experience. At points, you will find various routes to choose from, but not to worry, as they all shall lead you to the falls.</p>
<p>Location: Sri Venkateswara National Park near the Nerabailu village in the Chittoor district</p>
     </div>
     </div>
     <div>
      <img height="100%" width="100%" src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/Trek-To-Talakona-Waterfalls_18th-Dec.jpg'/>
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
      <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/deodar-forest_02nd-jun.jpg' />
     </div>
     <div>
     <h3>5. Experience The Freezing Point In Lambasingi</h3>
      <div className={Styles.textt}>
          <p>Yes, you heard it right. Andhra Pradesh where the nominal temperature is always around 40-degree centigrade, there is located a small village called Lambasingi and the temperature of this place never rises above 10-degree centigrade. This is the only place in South India, where you may even experience snowfall during winters. Though it’s not alike the snowfall you have in other hill stations, it’s just dew getting frost and appears to be like snow hovering around freezing point.</p>
          <p>This event is what made this place so famous. Though it is still not that much crowded when you reach this place, you will experience the winters in all its glory. The place is perched at a height of 1000 meters above sea level and coffee and tea plantations are one of the main jobs of the locals.</p>
<p>Location: Araku Valley, Andhra Pradesh</p>
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
     <h3>6. Experience Hanging Pillar In Lepakshi Temple</h3>
     <div className={Styles.textt}>
      <p>The temple is dedicated to Goddess Veerabhadra and is in a small village in Anantapur district in Andhra Pradesh. The temple was constructed during the reign of Vijayanagar Kings in the 16th century. The temple has a total of three shrines each dedicated to Lord Shiva, Vishnu, and Veerabhadra respectively. The unique thing about the architecture of this temple is its 70 pillars which support the temple. The main attraction of this temple is the largest sculpture of Veerabhadra and a hanging pillar called Aakasa Sthambha.</p>
      <p>The pillar rather than resting on the ground is hanging from the ceiling and is always raised at a height of around one inch from the ground. People often like experimenting with this unique pillar by passing through their handkerchief through the base of this pillar. The whole temple stands on a rocky hill called ‘Kurmasailam’ or tortoise hill.</p>
<p>Location: Anantapur, Andhra Pradesh</p>
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/Experience-Hanging-Pillar-In-Lepakshi-Temple_18th-Dec.jpg'/>
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
      <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/Go-On-A-Wildlife-Safari-In-Srisailam-Wildlife-Sanctuary_18th-Dec.jpg'/>
     </div>
     <div>
     <h3>7. Go On A Wildlife Safari In Srisailam Wildlife Sanctuary</h3>
    
      <div className={Styles.textt}>
          <p>Srisailam wildlife sanctuary is India’s one of the largest Tiger Reserves which is spread over five districts that are Nalgonda, Mahaboobnagar, Kurnool, Prakasam, and Guntur. The place was declared as a tiger reserve in the year 1983 and has river Krishna flowing through it over 130 km. The terrain of this reserve is breathtaking and rugged and winds around the Mallamali hills. The dry deciduous forests with plenty of scrubs and bamboo thickets often provide shelter to the animals like tigers and leopard to sit and thrive for their food in a shape of deer, sloth bear, etc.</p>
          <p>The place is also a house for multiple varieties of flora and fauna. There are around 20 rare species that are found only at this place. The fauna includes animals like tigers, leopard’s sloth bears, etc. The tigers are very rarely sighted by the locals. The best time to visit this place is during summers from March till mid of June. There are three forest rest houses in this location. The nearest town is Macherla and the nearest railhead is in Hyderabad.</p>
<p>Location: Andhra Pradesh</p>
      </div>
     </div>
    </div>
    <br/>
    <br/>
    <br/>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    
    <br/>
    <br/>
    <br/>
    <br/>
    <div className={Styles.ad}>
     <div>
     <h3>8. Admire The Serene Beaches Of Andhra Pradesh</h3>
     <div className={Styles.textt}>
      <p>Andhra Pradesh is a land of serene beaches and the best way to spend a day in summers in Andhra Pradesh is to go explore one of them. Some of the best beaches that must not miss visiting in Andhra Pradesh are Baruva Beach in Srikakulam, Bheemunipatnam or Bheemili and Yarada Beach near Vizag. Also, you must visit Suryalanka beach in Guntur, Vodarevu beach in Chirala and Ramakrishna beach in Vizag. You can visit any depending on your location at that time.</p>
<p>Location: Various in Andhra Pradesh</p>
     </div>
     </div>
     <div>
     <img height="100%" width="100%"  src='https://assets.traveltriangle.com/blog/wp-content/uploads/2019/12/Admire-The-Serene-Beaches-Of-Andhra-Pradesh_18th-Dec.jpg'/>
     </div>
    </div>

    <br/>
    <br/>
    <br/>
    <br/>
    <h4>Other than the things mentioned above, there is a lot more things to do in Andhra Pradesh. It all depends on your location, where you are in Andhra Pradesh at the time when you are trying to explore things to do. There is also a famous Tirupati temple located in Andhra Pradesh, which needs to be mentioned. It’s a whole circuit including Tirumala Temple. Most places are like a day trip or a weekend getaway, so you can plan your trips to Andhra Pradesh accordingly.</h4>
    <br/>
    <br/>
    </div>}



    </>
  )
}

export default Andhra