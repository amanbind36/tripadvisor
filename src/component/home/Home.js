import React from 'react'
import { Navigation, Pagination } from "swiper";
import Styles from "./home.module.css";
import asam from "../image/asam.jfif"
import oddisa from "../image/oddisa.jfif"
import andhra from "../image/andhra.jpg"
import list from "../image/list.jpg"
import charminar from '../pic/BannerTelangana.jpg';
import {Link} from "react-router-dom";

import pic01 from './picss/pic01.webp';
import pic02 from './picss/pic02.jpeg';
import pic03 from './picss/pic03.jpeg';
import pic04 from './picss/pic04.jpeg';
import pic05 from './picss/pic05.jpeg';
import pic06 from './picss/pic06.jpeg';
import pic07 from './picss/pic07.jpeg';
import pic08 from './picss/pic08.jpeg';


import w1 from "../images/wb1.jpg"
import w2 from "../images/wb2.jpg"
import w3 from "../images/wb3.jpg"
import w4 from "../images/wb4.jpg"

import r1 from "./img/r1.jpg"
import r2 from "./img/r2.jpg"
import r3 from "./img/r3.jpg"
import r4 from "./img/r4.jpg"
import ut1 from "./img/ut1.jpg"
import ut2 from "./img/ut2.jpg"
import ut3 from "./img/ut3.jpg"
import ut4 from "./img/ut4.jpg"

import kn1 from "./img/k1.jpg"
import kn2 from "./img/kn2.jpg"
import kn3 from "./img/kn3.jpg"
import kn4 from "./img/kn4.jpg"

import placeAssam from '../images/placeAssam.jpg';
import wildAssam from '../images/wildAssam.webp';
import templeAssam from '../images/templeAssam.jpg';
import hillAssam from '../images/hillAssam.webp';

import odibeach from '../images/odibeach.jpg'
import odihill from '../images/odihill.jpg'
import odiplace from '../images/odiplace.webp';
import oditemple from '../images/oditemple.jpg'


//andhra

import pics1 from '../pic/MuseumsTel.webp';
import pics2 from '../pic/templeTelanglana.jpg';
import pics3 from '../pic/ramuji.jpg';

//telangana

import tel1 from '../pic/PalacesTelanagana.jpg';
import tel2 from '../pic/WaterfallsTelangana.jpg';
import tel3 from '../pic/BannerTelangana.jpg';

//goa

import goa1 from '../picc/p1.jpg';
import goa2 from '../picc/p2.jpg';
import goa3 from '../picc/p3.jpg';

//kerala
import kera1 from '../picc/p4.jpg';
import kera2 from '../picc/p5.jpg';
import kera3 from '../picc/p6.jpg';

//mp
import mp1 from '../mp/photos/mpWild.jpg';
import mp2 from '../mp/photos/mpmousem.jpg';
import mp3 from '../mp/photos/mppalce.jpg'

//maha
import maha1 from '../Maharastra/Photo/Victoria_Terminus,_Mumbai.jpg';
import maha2 from '../Maharastra/Photo/flimcity.jpg';
import maha3 from '../Maharastra/Photo/mahaBeaches.jpg';


//sikkim

import sik1 from '../Sikkim/img/pic001.jpg';
import sik2 from '../Sikkim/img/pic002.jpg';
import sik3 from '../Sikkim/img/pic004.jpg';

//tn
import tn1 from '../Tamil Nadu/img/pic0010.jpg';
import tn2 from '../Tamil Nadu/img/pic003.jpg';
import tn3 from '../Tamil Nadu/img/pic005.jpg';


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper";
import ScrollAd from './ScrollAd/ScrollAd';
import Musicpage from './music/Musicpage';

const Home = () => {
  const card=[
   {name:"Andhra:Trip",
   price:"from 9,883 per adult",
   image:[pics1,pics2,pics3],
   link:'andhra'
},
{name:"Telangana:Trip",
   price:"from 9,883 per adult",
   image:[tel1,tel2,tel3],
   link:'telangana'
},
    {name:"West Bengal:Trip",
     price:"from 9,883 per adult",
     image:[w2,w1,w3,w4],
     link:'westBengal'
  },
  {name:"Assam:Trip",
     price:"from 9,883 per adult",
     image:[placeAssam,wildAssam,templeAssam,hillAssam]
     ,
     link:'assam'
  },
  {name:"Oddisa:Trip",
     price:"from 9,883 per adult",
     image:[odibeach,odihill,odiplace,oditemple],
     link:'odisha'
  },
  {name:"Rajsthan:Trip",
     price:"from 9,883 per adult",
     image:[r1,r2,r3,r4],
     link:'rajsthan'
  },
  {name:"Uttarakhand:Trip",
     price:"from 9,883 per adult",
     image:[ut1,ut2,ut3,ut4],
     link:'uttarakhand'
  },
  {name:"Karnataka:Trip",
     price:"from 9,883 per adult",
     image:[kn1,kn2,kn3,kn4],
     link:'bangalore'
  },
 
  {name:"Goa:Trip",
     price:"from 9,883 per adult",
     image:[goa1,goa2,goa3],
     link:'goa'
  },
  {name:"Kerala:Trip",
     price:"from 9,883 per adult",
     image:[kera1,kera2,kera3],
     link:'kerala'
  },
  {name:"MP:Trip",
     price:"from 9,883 per adult",
     image:[mp1,mp2,mp3],
     link:'mP'
  },
  {name:"Maharastra:Trip",
     price:"from 9,883 per adult",
     image:[maha1,maha2,maha3],
     link:'maharashtra'
  },
  {name:"Uttar Pradesh:Trip",
     price:"from 9,883 per adult",
     image:[asam,oddisa,andhra,charminar],
     link:'uttar'
  },
  {name:"Jammu & Kasmir:Trip",
  price:"from 9,883 per adult",
  image:[asam,oddisa,andhra,charminar],
  link:'jammu'
},
{name:"Tamil Nadu :Trip",
price:"from 9,883 per adult",
image:[tn1,tn2,tn3],
link:'tamilNadu'
},
{name:"Sikkim:Trip",
price:"from 9,883 per adult",
image:[sik1,sik2,sik3],
link:'sikkim'
},

  ]

  const ScrollCarouselCard = ({ name, price, link, image }) => {
    return (
        <div className={Styles.scontainer}>
            <div className={Styles.scroll}>
                 <Link to={link}>
                <span>
                    <Swiper  pagination={{
          clickable: true,
        }} navigation={true} modules={[Navigation,Pagination]} className={Styles.mys}>

                        {image.map((image, index) => (
                          <div className={Styles.cardimg}>
                          <SwiperSlide>
                                <img key={index} src={image} alt={`Image ${index + 1}`} className={Styles.imgs} />
                            </SwiperSlide>
                          </div>
                           

                        ))}

                    </Swiper>


                </span>
                <span className='carouselTextName'><h2>{name}</h2></span><br />
                <span className='carouselTextPrice'><p>{price}</p></span><br />
                
               
</Link>

            </div>
        </div>
    )
}


  
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
          pagination={{
          clickable: true,
        }}
      
          navigation={true} modules={[Navigation,Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic01} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic02} className='carouselImg'/></SwiperSlide>
        <SwiperSlide><img src={pic03} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic04} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic05} className='carouselImg'/></SwiperSlide> 
        <SwiperSlide><img src={pic06} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic07} className='carouselImg' /></SwiperSlide>
        <SwiperSlide><img src={pic08} className='carouselImg' /></SwiperSlide>
  
      </Swiper>

      <div className={Styles.main}>
    
    <input type="text" placeholder='Where to' />

</div>

<ScrollAd/>

<Musicpage/>

      <div>
                <div className='scrollHeading3'>
                  
                </div>
                <div id='scroll3BtnDiv' >
                    {/* <span id='scroll3Btn'>Sell More <FaLongArrowAltRight id='arrowicon'/></span> */}
                </div>
                <div className={Styles.lastcard}>
                    {card.map(cardx => (
                       
                        <ScrollCarouselCard key={cardx.name} {...cardx} />
                    ))};

                </div>
            </div>




    <div className={Styles.container}>
    
      

         <br/>
         <div className={Styles.list}>
           <div className={Styles.lefta}>
            <div className={Styles.text}>
                <h3>Get out there</h3>
                <p>Best of the tours, attractions & activities you won't to miss.</p>
                <button>See the list</button>
            </div>
           </div>
           <div>
            <img width="100%" height='100%' src={list}/>
           </div>
         </div>
    </div>
    </>
  )
}

export default Home