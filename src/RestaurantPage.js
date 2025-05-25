import {useParams}  from "react-router-dom";
import './RestaurantComponent.css'
import { IoFastFood } from "react-icons/io5";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import React from 'react';
import { FaCreditCard } from "react-icons/fa";
import { GoClockFill } from "react-icons/go";
import Footer from './Footer';
const data = [{
    id: 1,
    title: 'Yakiniku Iwasaki',
    img: {src:'/caption.jpg',alt: ""},
    location: "Ueno",
    text: "Like",
    url : "https://shorturl.at/lcY73",
    images: [{
      original: "/caption5.jpg",
      thumbnail: "/caption5(Custom).jpg",
  },
  {
      original: "/caption4.jpg",
      thumbnail: "/caption4(Custom).jpg",
  },
  {
      original: "/about-reservations-you.jpg",
      thumbnail: "/about-reservations-youC.jpg",
  },
  {
      original: "/caption(4).jpg",
      thumbnail: "/caption(4)C.jpg",
  },
  {
      original: "/caption(3).jpg",
      thumbnail: "/caption(3)C.jpg",
  },
  {
      original: "/caption2.jpg",
      thumbnail: "/caption2.jpg",
  },],
  address: "2 Chome−8−2 Keiwan Building A, Ueno, Taito 110-0005 Tokyo Prefecture" ,
  description: "Yakiniku Iwasaki offers premium Black Wagyu beef that is obtained whole and processed to halal standards. Delicious yakiniku is produced by carefully hand-slicing each chop to highlight its unique flavor. Enjoy the rich sweetness and umami that come through in every bite. Savor delicious, fresh, and odorless Wagyu. We also have a license to serve raw meat, and our limited-edition marbled yukhoe and other treats will please raw meat enthusiasts. Savor the taste of premium beef in a relaxed, somewhat secluded setting.",
  map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7016524400738!2d139.76989987523578!3d35.708958772578285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188deb4e6f5b43%3A0x42385d2e8cae4257!2sYakiniku%20IWASAKI!5e0!3m2!1sen!2suk!4v1742475524923!5m2!1sen!2suk",

    
  }
, {
  id: 2,
  title: 'Honolu Ramen',
  img: {src:'/photo3jpg.jpg',alt: ""},
  location: "Ebisu",
  url: "https://www.google.com/maps/place/Halal+Ramen+Honolu+Osaka+Namba/@34.6622801,135.4955777,17z/data=!3m1!4b1!4m6!3m5!1s0x6000e772ececaa5f:0xd9b8ce5b09b23972!8m2!3d34.6622801!4d135.4955777!16s%2Fg%2F11c1xd939r?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D",
  text: "Like",
  images: [{
    original: "/fried-chicken-ramen.jpg",
    thumbnail: "/fried-chicken-ramen.jpg",
},
{
    original: "/ramen-honolu.jpg",
    thumbnail: "/ramen-honolu.jpg",
},
{
    original: "/ramen-honolu (1).jpg",
    thumbnail: "/ramen-honolu (1).jpg",
},
{
    original: "/ramen-honolu (2).jpg",
    thumbnail: "/ramen-honolu (2).jpg",
},
{
    original: "/spicy-fried-chicken-ramen.jpg",
    thumbnail: "/spicy-fried-chicken-ramen.jpg",
},
{
    original: "/ramen-honolu (3).jpg",
    thumbnail: "/ramen-honolu (3).jpg",
},],
address: "2-5-27 Motomachi, Naniwa-Ku 1f, Osaka 556-0016 Osaka Prefecture" ,
description: "",
map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.699939900268!2d135.49557769999998!3d34.6622801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e772ececaa5f%3A0xd9b8ce5b09b23972!2sHalal%20Ramen%20Honolu%20Osaka%20Namba!5e0!3m2!1sen!2suk!4v1744052193603!5m2!1sen!2suk",


  
},
{
  id: 3,
  title: 'Ayama-Ya',
  img: {src:'/ayam-ya-okachimachi.jpg',alt: ""},
  location: "Okachimachi",
  text: "Like",
  url: "https://www.google.com/maps/dir//Halal+Ramen+Ayam+Ya+Karasuma+Kyoto,+%E5%AE%A4%E7%94%BA%E6%96%B0%E7%94%BA+%E3%81%AE+%E9%96%93%E9%8C%A6%E5%B0%8F%E8%B7%AF%E4%B8%8B%E3%82%8B+%E8%A6%B3%E9%9F%B3%E5%A0%82%E7%94%BA+470,+Kannondocho,+Nakagyo+Ward,+Kyoto,+604-8222,+Japan/@35.0043339,135.7525078,17z/data=!3m1!5s0x6001089b7a11944f:0x9e83a0fcf8e26460!4m9!4m8!1m0!1m5!1m1!1s0x6001089b7a6c41e5:0x2938fbf7a607a990!2m2!1d135.7573787!2d35.004334!3e0?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D",
  images: [{
    original: "/spicy-ramen-with-apple.jpg",
    thumbnail: "/spicy-ramen-with-apple.jpg",
},
{
    original: "/noko-tori-ramen-shio.jpg",
    thumbnail: "/noko-tori-ramen-shio.jpg",
},
{
    original: "/ayam-ya.jpg",
    thumbnail: "/ayam-ya.jpg",
},
{
    original: "/location-it-replaces.jpg",
    thumbnail: "/location-it-replaces.jpg",
},
{
    original: "/ayam-ya-okachimachi (1).jpg",
    thumbnail: "/ayam-ya-okachimachi (1).jpg",
},
{
    original: "/ayam-ya-okachimachi (2).jpg",
    thumbnail: "/ayam-ya-okachimachi (2).jpg",
},],
description: "",
map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.7745214921893!2d139.783684075636!3d35.707165872578855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ffb86138f75%3A0x2f6a06bcbcecc5d4!2sAyam-ya%20Halal%20Ramen%20Tokyo!5e0!3m2!1sen!2suk!4v1744227452351!5m2!1sen!2suk",
address : "4-10-1 Taito Yamada Bldg. 1F, Taito 110-0016 Tokyo Prefecture",
},
{
  id: 4,
  title: 'Al Mina',
  img: {src:'/al-mina.jpg',alt: ""},
  location: "Chiyoda",
  text: "Like",
  url: "https://maps.app.goo.gl/5pBPzjbvSHKJKZg36",
  address: "101-0046 Tokyo, Chiyoda City, Kanda Tacho",
  map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.3300887179093!2d139.76469388331293!3d35.69349390189131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c03b6087217%3A0xbd8d1c7f5a1f51ff!2z77yh77ys77yt77yp77yu77yh!5e0!3m2!1sen!2suk!4v1744227956520!5m2!1sen!2suk",
  images: [{
    original: "/lamb-shank.jpg",
    thumbnail: "/lamb-shank.jpg",
},
{
    original: "/photo2jpg.jpg",
    thumbnail: "/photo2jpg.jpg",
},
{
    original: "/rice-with-tense-lamb.jpg",
    thumbnail: "/rice-with-tense-lamb.jpg",
},
{
    original: "/photo1jpg.jpg",
    thumbnail: "/photo1jpg.jpg",
},
{
    original: "/photo0jpg.jpg",
    thumbnail: "/photo0jpg.jpg",
},
{
    original: "/photo0jpg (1).jpg",
    thumbnail: "/photo0jpg (1).jpg",
},],
  
},
{ id: 5,
  title: 'Yakiniku Ushigoro',
  img: {src:'/caption (1).jpg',alt: ""},
  location: "Nishiazabu",
  text: "Like",
  url: "https://maps.app.goo.gl/snfivqRHrnNDjodE7",
  address: "2-24-14 1F Barbizon73, Nishiazabu, Minato 106-0031 Tokyo Prefecture",
  map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.687688132649!2d139.71994587563384!3d35.6600655725941!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bfc01ac58fb%3A0xe241190aa161bb07!2sYakiniku%20Ushigoro%20Nishiazabu!5e0!3m2!1sen!2suk!4v1744309876246!5m2!1sen!2suk",
  description: "",
  images: [{
    original: "/caption (3).jpg",
    thumbnail: "/caption (3).jpg",
},
{
    original: "/1500.jpg",
    thumbnail: "/1500.jpg",
},
{
    original: "/photo4jpg.jpg",
    thumbnail: "/photo4jpg.jpg",
},
{
    original: "/photo0jpg (2).jpg",
    thumbnail: "/photo0jpg (2).jpg",
},
{
    original: "/caption (4).jpg",
    thumbnail: "/caption (4).jpg",
},
{
    original: "/caption (5).jpg",
    thumbnail: "/caption (5).jpg",
},],
  
  
  
},
{ 
  id: 6,
  title: 'Shoutaian Kanda',
  img: {src:'/course.jpg',alt: ""},
  location: "Chiyoda",
  text: "Like",
  url: "https://maps.app.goo.gl/ciRf1BTgznTgX3p5A",
  address: "1-9-19 Kajicho GEMS Shin 8th floor, Chiyoda 101-0044 Tokyo Prefecture",
  map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.453157967116!2d139.7700112756352!3d35.69046467258426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c00292db2c5%3A0x705abcaa0cdef27b!2sHALAL%20Wagyu%20Yakiniku%20SHOUTAIAN%20Kanda!5e0!3m2!1sen!2suk!4v1744310324506!5m2!1sen!2suk",
  description: "",
  images: [{
    original: "/red-meat-loin-sukiyaki.jpg",
    thumbnail: "/red-meat-loin-sukiyaki.jpg",
},
{
    original: "/course (1).jpg",
    thumbnail: "/course (1).jpg",
},
{
    original: "/meat-sushi.jpg",
    thumbnail: "/meat-sushi.jpg",
},
{
    original: "/caption (6).jpg",
    thumbnail: "/caption (6).jpg",
},
{
    original: "/caption (7).jpg",
    thumbnail: "/caption (7).jpg",
},
{
    original: "/caption (8).jpg",
    thumbnail: "/caption (8).jpg",
},],
  
  
  
  
}
]

export default function RestaurantPage(){
    const {id} = useParams();
    const item = data.find((items) => items.id === Number(id));

    if (!item) return <h1>Item not found</h1>

    class MyGallery extends React.Component {
      render() {
          return <ImageGallery items={item.images} />;
      }
  }
    
    return(
        <>
        <section className="RestaurantComponent">
            <h1>{item.title}</h1>
            </section>
            
            <MyGallery />
        
            <div className="RestaurantContainer">
            
            <section className="AddInfo">
                <h1>Explore</h1>
                <a href={item.url}>{item.address}</a>
                <h1>Location</h1>
                <div className="MapContainer">
                    <iframe src={item.map} width="600" height="450" style = {{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <h1>About</h1>
                <p>{item.description}</p>
                <h1>Details</h1>
                <p><IoFastFood /> Halal</p>
                <p><FaCreditCard /> Accepts Digital Payments</p>
                <p><GoClockFill /> Reservations</p>
               
                
            </section>
        
        
        
            
            <section className="Hours">
                <h1>Hours</h1>
                <div className="Text-Contents">
                    <div className="Days">
                    <p>Monday:   11:30am - 5am</p>
                    <p>Tuesday:  11:30am - 5am</p>
                    <p>Wednesday:  11:30am - 5am</p>
                    <p>Thursday:   11:30am - 5am</p>
                    <p>Friday:     11:30am - 5am</p>
                    <p>Saturday:   11:30am - 5am</p>
                    <p>Sunday:    11:30am - 5am</p>
                    
                    
        
                   
        
                    </div>
        
        
                   
                </div>
            </section>
            
            </div>


            <Footer />
            </>
    

    )
}