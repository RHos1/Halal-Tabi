import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Card({clickLike}){
    
    const[state,changeState] = React.useState("All");
    
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  
    const data = [{
        id: 1,
        title: 'Camii Market',
        img: './IMG_9594-1024x768-1.jpg',
        location: "Tokyo",
      }
    , {
      id: 2, 
      title: 'Shinjuku Halal Food',
      img: './2023-02-10.jpg',
      location: "Shinjuku",
    },
    {
      id: 3,
      title: 'HALAL-YA ASAKUSA',
      img: './unnamed.jpg',
      location: "Taito City",
    },
    {
      id: 4,
      title: 'Nasco Halal Food',
      img: './2025-03-10.jpg',
      location: "Shinjuku City",
    },
    { id: 5,
      title: 'Silk Road Market',
      img: './2021-01-23.jpg',
      location: "Nagoya",
    },
    { 
      id: 6,
      title: 'Jannat Halal Market',
      img: './2019-07-26.jpg',
      location: "Shinjuku City",
    }
    ]
    const FilteredCards = state === "All" ? data : data.filter((prev) => prev.location === state)
    
    
    
    return(
        
        <div className="CardContainer">
          <h1>Stores</h1>
          <div className="FilterButtons">
          {["All","Shinjuku","Tokyo","Nagoya"].map((contents) => (<button onClick = {()=> changeState(contents)} className="Filter" key={contents}>{contents}</button>))
          }
          </div>
        <Slider {...settings} key = {FilteredCards.length}>
        {FilteredCards.map((d) => (<section>
            <div className="Card">
            <div className ="CardImage">
                    <img src={d.img}></img>
                </div>
                <p>{d.title}</p>
                <div className = "buttons">
                <button>{d.location}</button>
                <button onClick = {() => clickLike(d)}>Like</button>
              </div>
            </div>
    
        </section>
        

        )) 
             }
        </Slider>
        </div>
        )
    
}