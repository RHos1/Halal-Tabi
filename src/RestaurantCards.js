import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function RestaurantCards({ clickLike }){

 
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  
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

    const [filter, setFilter] = React.useState("All");

    const filteredCards = filter === "All" ? data: data.filter((card) => card.location === filter);
      
    
    return(
        <div className="CardContainer">
          <h1>Restaurants</h1>
          <div className="FilterButtons">
            <button className="Filter" onClick = {() => setFilter("All")}>All</button>
            <button className="Filter" onClick = {()=>setFilter('Chiyoda')}>Chiyoda</button>
            <button className="Filter" onClick = {()=>setFilter('Shinjuku')}>Shinjuku</button>
            <button className="Filter" onClick = {()=>setFilter('Tokyo')}>Tokyo</button>

          </div>
        <Slider {...settings} key={filteredCards.length}>
        {filteredCards.map((d) => (<section key={d.id}>
            <div className="Card">
            <div className ="CardImage">
                    <img src={d.img}></img>
                </div>
                <p>{d.title}</p>
                
              <div className = "buttons">
                <button>{d.location}</button>
                <button onClick = {() => clickLike(d)}>{d.text}</button>
              </div>
                
            </div>
    
        </section>
        

        )) 
             }
        </Slider>
        </div>
        )
    
}