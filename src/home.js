import './App.css';
import Logo from './logo.js';
import Visit from './Visit.js'
import Footer from './Footer.js'
import VisitComponents from './VisitComponents.js'
import Contact from './contact.js'
import Ct from './CT.js'
import React from 'react'
import About from './About.js'
import Slide from './Slide.js'
import Cards from './Cards.js'
import RestaurantCards from './RestaurantCards.js'
import StoresCards from './StoresCards.js'
import _ from 'lodash';
import FavouriteSlot from './Favourites.js'





export default function Home(){

  
   


  function containsObject(obj, list) {
    var i;
    for( i = 0; i < list.length; i++){
      if (_.isEqual(list[i],obj)){
        list.splice(i,1);
        return true;
        
      }
    }
    return false;
  }

  
  
  const slides = [
    {url: './image1.jpg', alt:'image1'},
    {url: './image2.jpg', alt:'image2'},
    {url: './image3.jpg', alt:'image4'},
    {url: './image4.jpg', alt:'image4'},
    {url: './image5.jpg', alt:'image5'},
    {url: './image6.jpg', alt:'image6'},

  ]
  



    const containerStyles = {
      width: "80vw",
      height: "100vh",
      margin: "0 auto",

    };

    
    
    const [toggle,setToggle] = React.useState(false);

    const [Favourites, setFavourites] = React.useState([]);

    function clickLike(item){
      if (!containsObject(item,Favourites)){
        setFavourites((prev)=>[...prev,item])
      }
      else{
        setFavourites((prev) => prev.filter(fav => !_.isEqual(fav,item)));
      }
      
    
      
    
       
      
      
      
    }

  

    
   
    
    function toggleState(){
      setToggle((state) => !state)
    }
    const vComponents = VisitComponents.map((visit) => {
        return(

          <Visit 
    
          id = {visit.id}
          {...visit}
          
          />
        )
      })
       return (
          <>
          
           
           
           <Logo />
           <div>
            <div style={containerStyles}>
              <Slide slides = {slides}/>
            </div>

           </div>
      
           
           
           <About />
           <Cards clickLike = {clickLike} />
           <RestaurantCards clickLike = {clickLike}/>
           <StoresCards clickLike = {clickLike} />
           <FavouriteSlot array = {Favourites}/>

           
           
          
           {vComponents}
           <Ct  handleClick={toggleState}/>
           {toggle && <Contact />}
           <Footer />
          </>
         
        );

}