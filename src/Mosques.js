import Header from './Header.js'
import './Mosques.css'
import Footer from './Footer.js'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useNavigate} from "react-router-dom";


const MosqueData = [
    {
        id: 1,
        Name: "Tokyo Camii",
        Info: "The Tokyo Camii is the biggest mosque in Japan and is well-known for its tall minaret and elaborately adorned dome.Every Friday, it comes to life as the Muslim community in Tokyo gathers for Friday prayers and invites tourists to explore its breathtaking interior on the weekends.",
        img:{src:"/camii30-scaled.jpg" , alt:"Camii"},
        link: "https://tokyocamii.org/",
        location: "Shibuya",
        map: "https://www.google.com/maps/dir//Japan,+%E3%80%92151-0065+Tokyo,+Shibuya,+%C5%8Cyamach%C5%8D,+1%E2%88%9219+2F/@35.6681328,139.5941524,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6018f34759be4315:0xc726759ce2573887!2m2!1d139.6765554!2d35.668234?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D"



    },
    {
        id: 2,
        Name: "Asakusa Mosque",
        Info: "Located in the heart of Tokyo, Daar Al-Arqam Mosque, also called Asakusa Mosque, was constructed in 1998. The Japan Mosque Foundation (JMF), a branch of the Islamic Circle Institute in Japan, is in charge of overseeing the Asakusa Mosque.",
        img:{src:"/Asakusa_Mosque_01.jfif" , alt:"Asakusa"},
        link: "https://mosqpedia.org/masajid/daar-al-arqam-asakusa-mosque/",
        location: "Taito City",
        map: "https://www.google.com/maps?rlz=1C1CHBF_en-GBGB939GB939&sca_esv=acf673aa48e31f36&cs=0&biw=1396&bih=670&dpr=1.38&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=KSVla-bojhhgMT0qXEMw0Us2&daddr=1+Chome-9-12+Higashiasakusa,+Taito+City,+Tokyo+111-0025,+Japan"



    }
    ,

    {
        id: 3,
        Name: "Indonesia Tokyo Mosque",
        Info: "Indonesia Tokyo Mosque is a mosque located in Meguro, Tokyo, Japan.  Yusron Ihza Mahendra, the current Indonesian Ambassador to Japan, conducted the groundbreaking during the 2015 Eid al-Fitr celebration with the assistance and continued communication of the Ministry of Foreign Affairs of Indonesia, the Indonesian Embassy in Tokyo, and the Family of Indonesian Islamic Community (KMII) board.",
        img:{src:"/Tokyo_Indonesia_Mosque.jpg" , alt:"Indonesia Tokyo Mosque"},
        link: "https://www.facebook.com/masjidindonesiatokyo/",
        location: "Meguro",
        map: "https://www.google.com/maps/dir//4+Chome-6-6+Meguro,+Meguro+City,+Tokyo+153-0063,+Japan/@35.6328414,139.6212095,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x60188b2528cec965:0x8160fa4f641177ed!2m2!1d139.7036106!2d35.6328695?entry=ttu&g_ep=EgoyMDI1MDIyMy4xIKXMDSoASAFQAw%3D%3D"


    },

    
    {
        id: 4,
        Name: "Kamata Masjid",
        Info: "Kamata Mosque, established in 2001, is a mosque in Tokyo's Kamata District, located in a 3-story building near JR East Station.The mosque is accessible within walking distance north of Kamata Station of JR East.",
        img:{src:"/kamatamasjid2_1024x.webp" , alt:"Kamata Masjid"},
        link: "https://www.facebook.com/kamatamasjidorg/",
        location: "Kamata Ward",
        map: "https://www.google.com/maps?rlz=1C1CHBF_en-GBGB939GB939&gs_lcrp=EgZjaHJvbWUqDAgAEAAYDRjjAhiABDIMCAAQABgNGOMCGIAEMg8IARAuGA0YrwEYxwEYgAQyCQgCEAAYDRiABDIICAMQABgNGB4yCggEEAAYBRgNGB4yBggFEEUYPDIGCAYQRRg8MgYIBxBFGDzSAQgzNDc2ajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=KTeOh1tbYBhgMeBxTp9zA9nb&daddr=5+Chome-1-2+Kamata,+Ota+City,+Tokyo+144-0052,+Japan"


    },

    {
        id: 5,
        Name: "Hira Masjid",
        Info: "In Ichikawa City, Chiba Prefecture, in front of Gyotoku Station, stands Hira Masjid, an Islamic place of worship. Through fund-raising efforts by local Muslims, it was established in 1997 under the direction of the Islamic Circle of Japan (ICOJ). It underwent renovations in 2005 and now resembles a mosque.",
        img:{src:"/Hira_Masjid.jfif" , alt:"Hira Masjid"},
        link: "https://www.halalfoodinjapan.com/mosque/Chiba/AREAL2524/AREAM2524/M10034/",
        location: "Ichikawa City",
        map: "https://www.google.com/maps?rlz=1C1CHBF_en-GBGB939GB939&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyEAgCEC4YrwEYxwEYgAQYjgUyCggDEAAYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxMzA4ajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kd047SFdhxhgMSR17WhzyMbN&daddr=3+Chome-3-2+Gyotoku+Ekimae,+Ichikawa,+Chiba+272-0133,+Japan"


    },
    {
        id: 6,
        Name: "Gifu Mosque",
        Info: "In Ichikawa City, Chiba Prefecture, in front of Gyotoku Station, stands Hira Masjid, an Islamic place of worship. Through fund-raising efforts by local Muslims, it was established in 1997 under the direction of the Islamic Circle of Japan (ICOJ). It underwent renovations in 2005 and now resembles a mosque.",
        img:{src:"/1024px-Gifu_Mosque.jfif" , alt:"Gifu Mosque"},
        link: "https://www.halalfoodinjapan.com/mosque/Chiba/AREAL2524/AREAM2524/M10034/",
        location: "Gifu City",
        map: "https://www.google.com/maps?rlz=1C1CHBF_en-GBGB939GB939&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyEAgCEC4YrwEYxwEYgAQYjgUyCggDEAAYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxMzA4ajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kd047SFdhxhgMSR17WhzyMbN&daddr=3+Chome-3-2+Gyotoku+Ekimae,+Ichikawa,+Chiba+272-0133,+Japan"


    },
    {
        id: 7,
        Name: "Fukuoka Masjid",
        Info: "In Ichikawa City, Chiba Prefecture, in front of Gyotoku Station, stands Hira Masjid, an Islamic place of worship. Through fund-raising efforts by local Muslims, it was established in 1997 under the direction of the Islamic Circle of Japan (ICOJ). It underwent renovations in 2005 and now resembles a mosque.",
        img:{src:"/cropped-99425392_3138046186239151_4291165154726379520_o.jpg" , alt:"Gifu Mosque"},
        link: "https://www.halalfoodinjapan.com/mosque/Chiba/AREAL2524/AREAM2524/M10034/",
        location: "Fukuoka",
        map: "https://www.google.com/maps?rlz=1C1CHBF_en-GBGB939GB939&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyEAgCEC4YrwEYxwEYgAQYjgUyCggDEAAYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxMzA4ajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kd047SFdhxhgMSR17WhzyMbN&daddr=3+Chome-3-2+Gyotoku+Ekimae,+Ichikawa,+Chiba+272-0133,+Japan"


    },
    {
        id: 8,
        Name: "Nagoya Mosque",
        Info: "In Ichikawa City, Chiba Prefecture, in front of Gyotoku Station, stands Hira Masjid, an Islamic place of worship. Through fund-raising efforts by local Muslims, it was established in 1997 under the direction of the Islamic Circle of Japan (ICOJ). It underwent renovations in 2005 and now resembles a mosque.",
        img:{src:"/nagoyamosque.jpg" , alt:"Gifu Mosque"},
        link: "https://www.halalfoodinjapan.com/mosque/Chiba/AREAL2524/AREAM2524/M10034/",
        location: "Nagoya",
        map: "https://www.google.com/maps?rlz=1C1CHBF_en-GBGB939GB939&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyEAgCEC4YrwEYxwEYgAQYjgUyCggDEAAYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxMzA4ajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kd047SFdhxhgMSR17WhzyMbN&daddr=3+Chome-3-2+Gyotoku+Ekimae,+Ichikawa,+Chiba+272-0133,+Japan"


    },
    {
        id: 9,
        Name: "Kobe Mosque",
        Info: "In Ichikawa City, Chiba Prefecture, in front of Gyotoku Station, stands Hira Masjid, an Islamic place of worship. Through fund-raising efforts by local Muslims, it was established in 1997 under the direction of the Islamic Circle of Japan (ICOJ). It underwent renovations in 2005 and now resembles a mosque.",
        img:{src:"/800px-Kobe_mosque01_2816.jpg" , alt:"Gifu Mosque"},
        link: "https://www.halalfoodinjapan.com/mosque/Chiba/AREAL2524/AREAM2524/M10034/",
        location: "Kobe",
        map: "https://www.google.com/maps?rlz=1C1CHBF_en-GBGB939GB939&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyEAgCEC4YrwEYxwEYgAQYjgUyCggDEAAYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxMzA4ajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kd047SFdhxhgMSR17WhzyMbN&daddr=3+Chome-3-2+Gyotoku+Ekimae,+Ichikawa,+Chiba+272-0133,+Japan"


    },
    {
        id: 10,
        Name: "Yokohama Mosque",
        Info: "In Ichikawa City, Chiba Prefecture, in front of Gyotoku Station, stands Hira Masjid, an Islamic place of worship. Through fund-raising efforts by local Muslims, it was established in 1997 under the direction of the Islamic Circle of Japan (ICOJ). It underwent renovations in 2005 and now resembles a mosque.",
        img:{src:"/1024px-Ja'me_Masjid_Yokohama.jfif" , alt:"Gifu Mosque"},
        link: "https://www.halalfoodinjapan.com/mosque/Chiba/AREAL2524/AREAM2524/M10034/",
        location: "Yokohama",
        map: "https://www.google.com/maps?rlz=1C1CHBF_en-GBGB939GB939&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7MgYIARBFGDkyEAgCEC4YrwEYxwEYgAQYjgUyCggDEAAYsQMYgAQyDQgEEAAYgwEYsQMYgAQyBggFEEUYPDIGCAYQRRg9MgYIBxBFGD3SAQgxMzA4ajBqNKgCALACAQ&um=1&ie=UTF-8&fb=1&gl=uk&sa=X&geocode=Kd047SFdhxhgMSR17WhzyMbN&daddr=3+Chome-3-2+Gyotoku+Ekimae,+Ichikawa,+Chiba+272-0133,+Japan"


    }
]


export default function Mosques(){
    
    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/detail/${id}`);

    };

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        vertical: true,
        arrows: true,
       

        beforeChange: function(currentSlide, nextSlide) {
            console.log("before change", currentSlide, nextSlide);
          },
          afterChange: function(currentSlide) {
            console.log("after change", currentSlide);
          }
      };
    
   
    return(
        <>
        <Header />
       
        <div className = "CardContainers">
        <Slider {...settings}>
        {MosqueData.map((data) => (
           <div className="Card" key = {data.id}>
           <div className ="CardImage">
                   <img onClick = {() => handleClick(data.id)}src={data.img.src}></img>
               </div>
               <p>{data.Name}</p>

               <div className = "buttons">
               <button>{data.location}</button>
             </div>
              
               
           </div>
        ))}
        </Slider>
        </div>
       
           
        <Footer />

        

        
        
        </>

    )
    

}