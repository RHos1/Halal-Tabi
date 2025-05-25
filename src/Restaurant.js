import './Restaurant.css'
import Header2 from './Header2.js'
import Slider from 'react-slick';
import React from 'react';
import {useNavigate} from "react-router-dom";
import Footer from './Footer'
const data = [{
    id: 1,
    title: 'Yakiniku Iwasaki',
    img: './caption.jpg',
    location: "Ueno",
    text: "Like",
    
  }
, {
  id: 2,
  title: 'Honolu Ramen',
  img: './photo3jpg.jpg',
  location: "Ebisu",
  text: "Like",
  
},
{
  id: 3,
  title: 'Ayama-Ya',
  img: './ayam-ya-okachimachi.jpg',
  location: "Okachimachi",
  text: "Like",
  
},
{
  id: 4,
  title: 'Al Mina',
  img: './al-mina.jpg',
  location: "Chiyoda",
  text: "Like",
  
  
},
{ id: 5,
  title: 'Yakiniku Ushigoro',
  img: './caption (1).jpg',
  location: "Nishiazabu",
  text: "Like",
  
  
},
{ 
  id: 6,
  title: 'Shoutaian Kanda',
  img: './course.jpg',
  location: "Chiyoda",
  text: "Like",
  
}
]

export default function Restaurant(){
  

  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/restaurant/${id}`);
  }

  const[state, changeState] = React.useState("All");

  const filteredCards = state === "All"?  data: data.filter((prev) => prev.location === state);
 
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
    return(<>
    <Header2 />
    <div className="FilterButtons">
      {["All","Ueno","Ebisu","Chiyoda","Okachimachi"].map((category) => (<button className="Filter" onClick={()=>changeState(category)}>{category}</button>))}

    </div>
    <Slider {...settings}>
    {filteredCards.map((d)=>(<section key = {filteredCards.length}>
        <div className="Card">
            <div className="CardImage">
                <img src={d.img} onClick={()=>handleClick(d.id)}></img>
            </div>
            <p>{d.title}</p>
            <div className="buttons">
            <button>{d.location}</button>
            </div>
            
            
        </div>
        
    </section>))}
    </Slider>

    


    
    
    </>)

}