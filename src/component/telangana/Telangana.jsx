import React,{useState} from 'react';
import './Telangana.css';

import MuseumsTel from '../pic/MuseumsTel.webp';
import PalacesTelanagana from '../pic/PalacesTelanagana.jpg';
import ramuji from '../pic/ramuji.jpg';
import templeTalanglana from '../pic/templeTelanglana.jpg';
import WaterfallsTelangana from '../pic/WaterfallsTelangana.jpg';


import pic01 from '../pic/BannerTelangana.jpg';
import pic02 from '../pic/MuseumsTel.webp';
import pic03 from '../pic/PalacesTelanagana.jpg';
import pic04 from '../pic/WaterfallsTelangana.jpg';
import pic05 from '../pic/ramuji.jpg';
import pic06 from '../pic/templeTelanglana.jpg';


import temple01 from './telanganaImg/temp/Birla Mandir.jpg';
import temple02 from './telanganaImg/temp/Gnana Saraswathi Temple.jpg';
import temple03 from './telanganaImg/temp/Karmanghat Hanuman Temple.jpg';
import temple04 from './telanganaImg/temp/Surendrapuri Temple.jpg';
import temple05 from './telanganaImg/temp/Visa-God.jpg';
import temple06 from './telanganaImg/temp/LakshmiNarasimhaTemple.jpg';


import hills01 from './telanganaImg/hill/Araku Valley.jpg';
import hills02 from './telanganaImg/hill/Dandeli.jpg';
import hills03 from './telanganaImg/hill/Lambasingi.jpg';
import hills04 from './telanganaImg/hill/Lonavala.jpg';
import hills05 from './telanganaImg/hill/Yelagiri Hills.jpg';
import hills06 from './telanganaImg/hill/horsley-hills-near-hyderabad.jpg';

import Museums01 from './telanganaImg/mousweum/Chowmahalla-Palace.jpg';
import Museums02 from './telanganaImg/mousweum/Salar-Jung-Museum.jpg';
import Museums03 from './telanganaImg/mousweum/Sudha-car.jpg';
import Museums04 from './telanganaImg/mousweum/Telangana-State-Archeology-Museum.jpg';








import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";



const Telangana = () => {

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
    
    
    {/* <div className='banner3'>
        <p className='tourTitles'>Tourism to Telangana</p>
    </div> */}
    <div>
        <p className='title'>Tourism in Telangana</p>

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

<br></br>
        <article class="telnewspaper">
        Telangana is located in the southern part of India and is renowned for its natural attractions, temples, palaces, forts and other heritage sites. The rich cultural heritage of the state makes it one of the most visited tourist destinations in South India.

            According to the Telangana State Tourism Development Corporation, about 92.8 million and 0.318 million domestic and international tourists, respectively, visited the state in 2018. This tourist-friendly state has a large number of big and small accommodation options including budget, luxury and heritage hotels, homestays and resorts.

            After India’s freedom, the then Nizam wanted Hyderabad State to remain independent. But the Indian Government annexed it in 1948 with ‘Operation Polo’. In 1956, Telangana region was combined with Andhra State to form Andhra Pradesh. In the years that followed, there were many major movements to revoke the merger. Consequently, the state of Telangana was officially formed from the northwest part of Andhra Pradesh on 2nd June, 2014.
          
</article>
    </div>

    

    <div>
        <p className='catogoryTitle'>Popular area to visit in Telangana</p>

        <hr/>

        <div className='Togglebuttons'>
      <button onClick={handlePopular}>Popular Places</button>
     <button onClick={handleToggle}>Hill Stations</button>
     <button onClick={handleReligious}>Religious Places</button>
     <button onClick={handleAdventure}>Museums </button>
      </div>

      <hr/>
        {/* popular */}
         {isVisible && <div> 
        <div className='TelcatogaryDiv'>
            <img src={templeTalanglana} alt="" className='telimages'/>
            <p className='textWBCat'>Temples: Jagannath Temple, Kolanupaka Jain Temple, Thousand Pillar Temple, Sita Ramachandraswamy Temple, Ramappa Temple  </p>
        </div>

        <div className='TelcatogaryDiv'>
            <p className='textWBCat'>Museums: Salar Jung Museum, Telangana State Archaeology Museum, BM Birla Science Museum, Heritage Jail Museum, Sudha Cars Museum            </p>
            <img src={MuseumsTel} alt="" className='telimages'/>

        </div>

        <div className='TelcatogaryDiv'>
        <img src={WaterfallsTelangana} alt="" className='telimages' />
            <p className='textWBCat'> Lakes & Waterfalls: Hussain Sagar Lake, Osman Sagar Lake, Durgam Cheruvu, Laknavaram Lake, Pakhal Lake,
 Kuntala Waterfalls, Mallela Theertham, Bheemuni Paadam Waterfalls, Gayatri Waterfalls, Kanakai Waterfalls  </p>
        </div>

        <div className='TelcatogaryDiv'>
            <p className='textWBCat'>
            Forts & Palaces: Qutb Shahi tombs ,Charminar ,Golconda Fort, Bhongir Fort, Warangal Fort, Elgandal Fort, Khammam Fort, Devarakonda Fort, Jagtial Fort, Chowmahalla Palace, Hill Fort Palace, Falaknuma Palace, King Kothi Palace, Jubilee Hall, Purani Haveli
            </p>
            <img src={PalacesTelanagana} alt=""className='telimages' />

        </div>


        <div className='TelcatogaryDiv'>
        <img src={ramuji} alt=""className='telimages' />

            <p className='textWBCat'>
            Other Attractions: Ramoji Film City, Wonderla, Manjeera Dam, Ananthagiri Hills
            </p>

        </div>

        </div>}


        {/* Hill Stations */}
        {mountain && <div>
          <div className='TelcatogaryDiv'>
          <img src={hills01} alt="" className='telimages' />
          <p className='textWBCat'>
          Popular for its pristine landscape, Araku Valley is one of the most vibrant regions of the Eastern Ghats. It is located around 710 kilometers from Hyderabad. Araku Valley boasts of natural biodiversity and rich tribal culture. The naturally occurring Borra Caves are the longest and deepest network of caves occurring in the Indian subcontinent.

          </p>
            </div>


            <div className='TelcatogaryDiv'>
          <p className='textWBCat'>
          Wildlife enthusiasts can visit the Dandeli Wildlife Sanctuary and Anshi National Park for an enthralling experience. The distinctive flora and fauna of the region are worth exploring. Book a Jungle Safari to witness rare animals like Bisons and Black Panthers at these sanctuaries. Kavala Caves, Ulavi Temple, Sri Mallikarjuna Temple, Syntheri Rocks, Supa Dam, and Satholi Falls are some of the other prominent tourist attractions in and around Dandeli.
          </p>
          <img src={hills02} alt="" className='telimages' />

            </div>


            <div className='TelcatogaryDiv'>
          <img src={hills03} alt="" className='telimages' />
          <p className='textWBCat'>
          Renowned as the ‘Kashmir of Andhra Pradesh’, Lambasingi is a richly forested area in Araku Valley. Lambasingi is situated in Chintapalli Mandal and lies within 600 kilometers of Hyderabad. This quaint hamlet is secretly tucked away in the majestic hills of Andhra Pradesh. Also known as Korra Bayalu, the village has pretty apple orchards.

The Kothapalli Waterfalls are a must visit in this region, where you can enjoy the natural grandeur of the region. Camping and trekking are prominent adventure activities in Lambasingi. It is the only place in South India that experiences snowfall. The chilling temperature and misty hills attract tourists who are looking for a getaway for relief from the scorching summers.
          </p>
            </div>


            <div className='TelcatogaryDiv'>
          <p className='textWBCat'>
          Lonavala situated in Maharashtra is among India’s most popular hill stations. It is nestled in the Sahyadri Ranges on the Western Ghats. Located around 630 kilometers from Hyderabad, Lonavala is the perfect destination for a trip with family and kids. The rolling hills of Lonavala are surrounded by dense forests, waterfalls, lakes, caves, dams, and numerous sightseeing spots.

Bhaja caves, Karla caves, Lohagad Fort, Rajmachi Fort, Ryewood Lake, Bhushi Dam, and Valvan Dam are prominent tourist spots of Lonavala. You can enjoy adventure sports and fun activities such as trekking, hiking, camping, bungee jumping, paragliding, rappelling, and mountain biking. Popular trekking trails are the Andharban trek and Bhimashankar trek.
          </p>
          <img src={hills04} alt="" className='telimages' />

            </div>
            

            <div className='TelcatogaryDiv'>
          <img src={hills05} alt="" className='telimages' />
          <p className='textWBCat'>
          Yelagiri Hills is a breathtakingly beautiful hill station near Hyderabad. It is located around 730 kilometers from Hyderabad, near Krishnagiri in the Vellore district of Tamil Nadu. The hill station has been able to preserve its pristine environment and rich tribal culture. Velavan Temple dedicated to Lord Murugan is a major tourist attraction in the area. It is flocked by devotees during the Karthigai Thirunal festival. Jalagamparai Waterfalls, Nilavoor Lake, and Punganur Lake are spots where you can connect with nature in its raw form.

Trekking, nature walks, boating, rock climbing, zorbing, ziplining, and paragliding are popular activities to enjoy in the region. A trek up the Swamimalai Hills offers rewarding views of the entire hill station, as it is the highest point of the regio
          </p>
            </div>


            <div className='TelcatogaryDiv'>
          <p className='textWBCat'>
          Popularly known as the ‘Ooty of Andhra’, Horsley Hills is a beautiful hill station near Hyderabad. Covered with thick forests, the area is locally referred to as Yenugulla Mallamma Konda. Horsley Hills is around 550 kilometers from Hyderabad. The region is home to the largest Banyan tree and the oldest Eucalyptus tree. The awe-inspiring landscape can be viewed from the Whisper Wind View Point.

The region also offers adventure sports. You can enjoy fun activities such as wall climbing, water walking, rappelling, swimming, a fish spa, and a visit to the mini zoo at Horsley Hills. Kaigal Falls is a great spot to enjoy a picnic with family and friends. Koundinya Wildlife Sanctuary is ideal for nature lovers and photographers. Gali Bandalu, also known as the Windy Rocks, is another spot to capture the picturesque sunrise and sunset over the city.
          </p>
          <img src={hills06} alt="" className='telimages' />

            </div>
            
            
            


          </div>}


        {/* Religious Places */}
        { religious && <div>

          <div className='TelcatogaryDiv'>
          <img src={temple01} alt="" className='telimages' />
          <p className='textWBCat'>
          Dedicated to Lord Venkateshwara, Birla Mandir in Hyderabad is an architectural beauty boasting of 2000 tonnes of white marble. The temple is located on a hilltop at the height of 280 feet which makes the structure look even more incredible. Constructed by the Birla Group (who are popularly known for building temples all over the country), the temple is the ideal place for meditating, given the fact that there are no bells here. There's a bit of climbing involved in reaching this holy site. After entering the place, you get a spectacular panoramic view of Hyderabad and Secunderabad which is worth the climb you take to reach the temple.
          </p>


            </div>
            <div className='TelcatogaryDiv'>
          <p className='textWBCat'>
          Located on the banks of the river Godavari in Basar village, the Gnana Saraswathi Temple has got rich history attached to it, going back to the time of Mahabharata. Dedicated to Goddess Saraswathi, the temple also made it to the list of best Sarawasthi temples of the country, which is probably why it is visited by thousands of devotees all round the year.
          </p>
          <img src={temple02} alt="" className='telimages' />



            </div>
            <div className='TelcatogaryDiv'>
          <img src={temple03} alt="" className='telimages' />
          <p className='textWBCat'>
          The Karmanghat Hanuman Temple is one of the oldest temples out there. Legend states that the temple was constructed in the 11th century A.D. The Karmanghat, along with the other temples in the same area follow the Vedic rules of worship in worshipping Lord Hanuman. Mainly known for curing life-taking diseases, the temple is also famous for its splendid architecture.
          </p>


            </div>
            <div className='TelcatogaryDiv'>
          <p className='textWBCat'>
          Surendrapuri is one of the few temples in India to have its mythological theme park. The place brims with culture, art, and amazing sculptures. Apart from the park being a significant tourist attraction, visitors can also pay a visit to the Nagakoti, a Shiva Linga standing tall at 101 feet and temples of Lord Hanuman and Lord Venkateswara. All deities in the temple are strategically placed, keeping in mind the Vedic knowledge used in building this one of a kind temple.
          </p>
          <img src={temple04} alt="" className='telimages' />



            </div>
            <div className='TelcatogaryDiv'>
          <img src={temple05} alt="" className='telimages' />
          <p className='textWBCat'>
          Hyderabad is not only famous for its Biryani. The city also has a range of temples so aesthetic and divine that you would want to pack your bags and go there right away. Located at Chilkur (Hyderabad district) The Balaji Temple is one of the most influential temples out there. Interestingly, the temple is famous for clearing the US and other western countries' Visa and thus, is also commonly known as Visa Balaji Temple. One of the oldest temples in the region it witnesses close to 100,000 devotees in a week. Visit the temple at any time of the year on any day. Fridays and Saturdays are the most crowded days of the week, so you would want to avoid that.
          </p>


            </div>

            <div className='TelcatogaryDiv'>
          <p className='textWBCat'>
          The Lakshmi Narasimha temple is Lord Narasimha's (embodiment of Lord Vishnu) abode. Due to its popularity, the temple is always bustling with devotees performing different types of darshans. The temple is located in a cave on a knoll in Yadadri Bhuvanagiri district. There are several chambers inside the temple, so it's worth taking a peaceful stroll on an evening and admiring the striking sculptures of deities spread all over the place.
          </p>

          <img src={temple06} alt="" className='telimages' />
            </div>
            

        </div>}



                  
        {/* Adventure Places */}
        { adventure && <div>

          <div className='TelcatogaryDiv'>
          <img src={Museums01} alt="" className='telimages' />
          <p className='textWBCat'>
          One of the grandest remnants of the era of Hyderabadi Nizams, the magnificent Chowmahalla Palace is a sight to behold. It was built in the 18th century and is said to look like Shah Palace of Tehran. Now a museum, Chowmahalla Palace gives visitors a glimpse into the fascinating life of the royals.

Ornate chandeliers, antique clocks, classic cars, expensive crockery, rare books, and many more artifacts belonging to the Nizam dynasty are on display here. The intricate carvings on the walls and pillars of the palace add to the overall charm of the place.
          </p>
         </div>

         <div className='TelcatogaryDiv'>
          <p className='textWBCat'>
          Salar Jung Museum is one of Hyderabad’s finest museums. What’s incredible about this museum is that its treasure trove of art from across the world was all acquired by the Salar Jung family alone. A major part of the collection of manuscripts, books, artworks, antiques and other artifacts exhibited here belonged to Nawab Mir Yousuf Ali Khan, or Salar Jung III.

One of the most valuable artifacts housed across its 38 galleries is the famous marble sculpture called The Veiled Rebbeca. With a collection of around 43,000 art objects, 9,000 manuscripts, and 47,000 books, this museum is said to be the third largest in the country.
          </p>
          <img src={Museums02} alt="" className='telimages' />

         </div>

         <div className='TelcatogaryDiv'>
          <img src={Museums03} alt="" className='telimages' />
          <p className='textWBCat'>
          Mr. K. Sudhakar, the mind behind this unique museum, is a Guinness World Record holder. The reason why this museum is called unique will be made clear to you as soon as you step into this whimsical world of cars designed in the shape of everyday objects, such as handbags, lipsticks, balls, bridal dress and more. Another thing that makes this museum really cool is that most of the ‘crazy cars’ housed here are made from unwanted scrap.

And mind you, all these cars are fully functional and not just for show. If you are in Hyderabad, make it a point to visit Sudha Car Museum if you wish to witness creativity at its best.
          </p>
         </div>

         <div className='TelcatogaryDiv'>
          <p className='textWBCat'>
          Formerly called Hyderabad Museum or Andhra Pradesh Archeology Museum, Telangana State Archeology Museum is one the city’s most popular tourist attractions. It is located in the Public Gardens and is said to be one of the most valuable museums in entire South India.

The museum is a result of the efforts of the last Nizam of Hyderabad to protect the heritage of the region against the British. The collection of Telangana State Archeology Museum includes stone and bronze sculptures, Buddhist and Jain relics, coins, arms and armory, paintings, and decorative art objects, among other valuable items. But the 2,353-year old Egyptian Mummy will definitely be the highlight of your visit to Hyderabad’s oldest museum.
          </p>
          <img src={Museums04} alt="" className='telimages' />

         </div>





                  </div>}







        
    </div>
    
    
    
    
    
    
    
   
    
    
    </>
  )
}
export default Telangana;


