import React from 'react';
export default function FavouriteSlot({array}){

    const [state,changeState] = React.useState('All');
    
    const FilteredCards = state === 'All'? array: array.filter(card => card.location === state)
   
      
   

    return(<>
    <div className = "Favourites">
        <h1>Favourites</h1>
        <div className="FilterButtons">
            {['All','Tokyo','Shinjuku','Shibuya','Chiyoda'].map((category) =>
                (<button className="Filter" onClick={()=>changeState(category)}>{category}</button>)
            )}
          
          </div>
         <div className = "FavouritesContainer">
         {FilteredCards.map((data) => (<div className = "Card" key={data.title}>
        <div className ="CardImage">
        <img src={data.img}></img>
        </div>
    <p>{data.title}</p>
    <div className = "buttons">
                <button>{data.location}</button>
              </div>
                
   
  </div>

    ))}
    
            

         </div>

    </div>
   
    
    </>)
    
    

}