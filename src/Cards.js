import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Card({clickLike}){

    const [state, ChangeState] = React.useState("All");


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      };
  
    const data = [{
        id: 1,
        title: 'Tokyo Camii',
        img: './image1.jpg',
        location: "Tokyo",
        text: "like",
      }
    , {
      id: 2,
      title: 'Osaka Castle',
      img: './image2.jpg',
      location: "Osaka",
      text: "like",
    },
    {
      id: 3,
      title: 'Kiyomizu Temple',
      img: './image3.jpg',
      location: "Kyoto",
      text: "like",
    },
    {
      id: 4,
      title: 'Matsumoto Castle',
      img: './image4.jpg',
      location: "Matsumoto",
      text: "like",
    },
    { id: 5,
      title: 'Nagasendo Trail',
      img: './image5.jpg',
      location: "Magome-Juku",
      text: "like",
    },
    { 
      id: 6,
      title: 'Mount Fuji',
      img: './image6.jpg',
      location: "Mount Fuji",
      text: "like",
    }
    ]
    const FilteredCards = state === "All" ? data : data.filter((card) => card.location === state);
    
    return(
      
      
        <div className="CardContainer">
          <h1>Mosques</h1>
          <div className="FilterButtons">
          {["All","Tokyo","Osaka","Kyoto"].map((contents)=>(<button className="Filter" onClick = {() => ChangeState(contents)}>
          {contents}
          </button>))}
      
      </div>
        <Slider {...settings} key ={FilteredCards.length}>
        {FilteredCards.map((d) => (<section>
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