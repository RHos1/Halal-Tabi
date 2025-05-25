import React, {useState, useEffect} from 'react';
import axios from 'axios';
export default function Events(){
    const [events, setEvents] = useState([]);
    const [displayAll,setAll] = useState(true);
    const [search, setSearch] = useState({
        query: ""    
    })
    const [results, setResult] = useState([]);

    const handleClick = () => {
        setAll((prev) => !prev)
    }

    const handleSearch = (e) => {
        setSearch((prev)=> ({...prev, [e.target.name]: e.target.value}));
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
    <form>
        <div className="searchBar">
        <input type="text" placeholder = "Search" name="query" id="query"></input>
        <button type="submit">Search</button>
        </div>
    </form>
    
    <h1 className = "Title" onClick={()=> handleClick()}>Show All</h1>
    <div className="allBlogs">
    {displayAll && events.map((event) => {
        return (
        <div key={event.events_id} className = "blogPrev">
            <div className="blogImg">
            <img src = {event.Image} alt="event-image"></img>
            <div className="bottom-left">{event.event_title}
                </div>
        </div>
       
        </div>
       
        );
    })}
    </div>
    
    </>

    );

};