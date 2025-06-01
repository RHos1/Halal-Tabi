import React, {useState, useEffect} from 'react';
import axios from 'axios';
export default function Events(){
    const [events, setEvents] = useState([]);
    const [displayAll,setAll] = useState(true);
    const [search, setSearch] = useState({
        query: ""    
    })
    const [display,setDisplay] = useState(true);

    const [results, setResult] = useState([]);

    const handleClick = () => {
        setAll((prev) => !prev)
    }

   
    const handleDisplay = () => {
        setDisplay((prev) => prev? !prev : prev)
    }

    const handleSearch = (e) => {
        setSearch((prev)=> ({...prev, [e.target.name]: e.target.value}));
    }

    const submitQuery = async (e) => {
      e.preventDefault();
      if (!search.query){
        alert("Search is Empty")
        return;
      }
      try{
        const response = await fetch('http://localhost:8080/searchEvents', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({query : search.query})
          })
          if(!response.ok){
            throw new Error("There appears to be an error with that request")
          }
          const data = await response.json();
          console.log("Search results", data);
          console.log(JSON.stringify(data,null,2));
          setResult(data);

      }catch(err){
        console.error("There appears to be an error here",err);
        alert("An error occured with that search");

      }

    }
      
     

    useEffect(() => {
        axios.get('http://localhost:8080/Events')
        .then(response => {
            console.log('API Response Data:', JSON.stringify(response.data, null, 2));
            setEvents(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);


    return(<>
    <h1 className = "Title">Events</h1>

    <form onSubmit={submitQuery}>
        <div className="searchBar">
        <input type="text" placeholder = "Search" name="query" id="query" value={search.query} onChange={handleSearch}></input>
        <button type="submit" onClick={() => handleDisplay()}>Search</button>
        </div>
    </form>

    {results.map((result) => {
        const shortText = result.event_content.split('');
        const words = shortText.splice(0,100);
        return(<div className="Result" key={result.events_id}>
            <h1>{result.event_title}</h1>
            <div className="Summary">
                <div className="sumimg">
                    <img src={result.Image} />
                </div>
                <p>{words}...</p>   
            </div>         

        </div>)
    }) }
    

    <h1 className="Show" onClick = {() => handleClick()}>Show More</h1>
    
    {displayAll && (<div className="allBlogs">
        {events.map((event) => {
            return(
            <div key = {event.events_id} className="blogPrev">
                <div className="blogImg">
                    <img src= {event.Image} ></img>
                    <div className="bottom-left">{event.event_title}</div>

                </div>
                
        

            </div>
            )
        })}
        
    </div>)}
    
    </>

    );

}
