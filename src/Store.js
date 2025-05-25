
import {useParams} from 'react-router-dom';
import ImageGallery from "react-image-gallery";
import React from 'react';
const data = [{
  id: 1,
  title: 'Camii Market',
  img: '/IMG_9594-1024x768-1.jpg',
  location: "Tokyo",
  url: "https://maps.app.goo.gl/5QwPtpToF3mTni5z9",
  address: "〒151-0065 Tokyo, Shibuya, Ōyamachō",
  map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3673935524757!2d139.6738279756342!3d35.66795467259152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3a3a8afb347%3A0x6671c9922f229daf!2sTokyo%20Camii%20Halal%20Market!5e0!3m2!1sen!2suk!4v1744389533236!5m2!1sen!2suk",
  description: "",
  images: [
{
    original: "/halal-mart-1.jpg",
    thumbnail: "/halal-mart-1.jpg",
},
{
    original: "/Tokyo-Camii-Halal-Market-1.jpg",
    thumbnail: "/Tokyo-Camii-Halal-Market-1.jpg",
},
{
    original: "/Tokyo-Camii-Halal-Market-2.jpg",
    thumbnail: "/Tokyo-Camii-Halal-Market-2.jpg",
},
{
    original: "/Tokyo-Camii-Halal-Market-4.jpg",
    thumbnail: "/Tokyo-Camii-Halal-Market-4.jpg",
},
],
  
  
}
, {
id: 2, 
title: 'Shinjuku Halal Food',
img: '/2023-02-10.jpg',
location: "Shinjuku",
url: "https://maps.app.goo.gl/5QwPtpToF3mTni5z9",
  address: "〒151-0065 Tokyo, Shibuya, Ōyamachō",
  map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.3673935524757!2d139.6738279756342!3d35.66795467259152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018f3a3a8afb347%3A0x6671c9922f229daf!2sTokyo%20Camii%20Halal%20Market!5e0!3m2!1sen!2suk!4v1744389533236!5m2!1sen!2suk",
  description: "",
  images: [
{
    original: "/halal-mart-1.jpg",
    thumbnail: "/halal-mart-1.jpg",
},
{
    original: "/Tokyo-Camii-Halal-Market-1.jpg",
    thumbnail: "/Tokyo-Camii-Halal-Market-1.jpg",
},
{
    original: "/Tokyo-Camii-Halal-Market-2.jpg",
    thumbnail: "/Tokyo-Camii-Halal-Market-2.jpg",
},
{
    original: "/Tokyo-Camii-Halal-Market-4.jpg",
    thumbnail: "/Tokyo-Camii-Halal-Market-4.jpg",
},

],
},
{
id: 3,
title: 'HALAL-YA ASAKUSA',
img: '/unnamed.jpg',
location: "Taito City",
url: "https://maps.app.goo.gl/1fAzpnVnCDhtdSsq5",
  address: "Building 5F, 1 Chome-9-1 Asakusa, Taito City, Tokyo 111-0032, Japan",
  map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.5979135293683!2d139.79030327563612!3d35.71151107257754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188f624e32e34b%3A0x1ba11bd8b8d1de12!2sHALAL-YA%20ASAKUSA%20FLAGSHIP%20STORE%20%2F%20Japanese%20halal%20souvenir%20store!5e0!3m2!1sen!2suk!4v1744487093437!5m2!1sen!2suk",
  description: "",
  images: [
{
    original: "/2024-12-08.jpg",
    thumbnail: "/2024-12-08.jpg",
},
{
    original: "/unnamed (2).jpg",
    thumbnail: "/unnamed (2).jpg",
},
{
    original: "/unnamed (3).jpg",
    thumbnail: "/unnamed (3).jpg",
},
{
    original: "/unnamed (4).jpg",
    thumbnail: "/unnamed (4).jpg",
},
{
  original: "/unnamed (5).jpg",
  thumbnail: "/unnamed (5).jpg",
},
{
  original: "/unnamed (6).jpg",
  thumbnail: "/unnamed (6).jpg",
},


],
},
{
id: 4,
title: 'Nasco Halal Food',
img: '/2025-03-10.jpg',
location: "Shinjuku City",
url: "https://maps.app.goo.gl/7HGoh4hSj55pCxrW7",
address: "2 Chome-10-8 Hyakunincho, Shinjuku City",
map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9847505771136!2d139.69709497523544!3d35.701992872580554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2f1a9ae45d%3A0x3408be2283e077fe!2sNasco%20Halal%20food!5e0!3m2!1sen!2suk!4v1744563057859!5m2!1sen!2suk",
description: "",
images: [{
  original: "/unnamed1.jpg",
  thumbnail: "/unnamed1.jpg",
},
{
  original: "/unnamed (7).jpg",
  thumbnail: "/unnamed (7).jpg",
},
{
  original: "/unnamed (8).jpg",
  thumbnail: "/unnamed (8).jpg",
},
{
  original: "/unnamed (9).jpg",
  thumbnail: "/unnamed (9).jpg",
},
{
  original: "/unnamed (10).jpg",
  thumbnail: "/unnamed (10).jpg",
},
{
  original: "/2024-10-07.jpg",
  thumbnail: "/2024-10-07.jpg",
},],
},
{ id: 5,
title: 'Silk Road Market',
img: '/2021-01-23.jpg',
location: "Nagoya",
url: "https://maps.app.goo.gl/DfWPcnvYKGr2dZgb7",
address: "358-1 Miyahigashicho, Showa Ward, Nagoya, Aichi 466-0804, Japan",
map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3262.1705749706402!2d136.95887957561035!3d35.15236647276245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60037b567b5718c7%3A0x759e3dd8998776b!2zU0lMSyBST0FEIE1BUktFVCAoSGFsYWwgTWFya2V0LyBXZXN0ZXJuIFVuaW9uKSDlkI3lj6TlsYvjg4_jg7zjg6njg6s!5e0!3m2!1sen!2suk!4v1744657270314!5m2!1sen!2suk",
description: "",
images: [{
  original: "/unnamed (11).jpg",
  thumbnail: "/unnamed (11).jpg",
},
{
  original: "/2021-01-17.jpg",
  thumbnail: "/2021-01-17.jpg",
},
{
  original: "/unnamed (12).jpg",
  thumbnail: "/unnamed (12).jpg",
},
{
  original: "/unnamed (13).jpg",
  thumbnail: "/unnamed (13).jpg",
},
{
  original: "/2020-05-24.jpg",
  thumbnail: "/2020-05-24.jpg",
},
{
  original: "/2021-02-12.jpg",
  thumbnail: "/2021-02-12.jpg",
},],
},
{ 
id: 6,
title: 'Jannat Halal Market',
img: '/2019-07-26.jpg',
location: "Shinjuku City",
url: "https://maps.app.goo.gl/YKXrDq8NqUtS4XxKA",
address: "Japan, 〒169-0073 Tokyo, Shinjuku City, Hyakunincho, 2 Chome−9−1 1F",
map : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.9764797097687!2d139.6949042833157!3d35.70219640188129!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d2f11df29b7%3A0x7044723b2e75ceb3!2sJannat%20Halal%20Food%20Shop%20Shin%20Okubo!5e0!3m2!1sen!2suk!4v1744658060599!5m2!1sen!2suk",
description: "",
images: [{
  original: "/unnamed (14).jpg",
  thumbnail: "/unnamed (14).jpg",
},
{
  original: "/unnamed (15).jpg",
  thumbnail: "/unnamed (15).jpg",
},
{
  original: "/unnamed (16).jpg",
  thumbnail: "/unnamed (16).jpg",
},
{
  original: "/unnamed (17).jpg",
  thumbnail: "/unnamed (17).jpg",
},
{
  original: "/unnamed (18).jpg",
  thumbnail: "/unnamed (18).jpg",
},
{
  original: "/unnamed (19).jpg",
  thumbnail: "/unnamed (19).jpg",
},],
}
]


export default function Store(){
    const {id} = useParams();
    const item = data.find((items) => items.id === Number(id));
    class MyGallery extends React.Component {
      render() {
          return <ImageGallery items={item.images} />;
      }
  }
    return(<>
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
    
    </>
    )
}



