import {useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { IoIosSearch } from "react-icons/io";
import { queryByTestId } from '@testing-library/dom';


export default function Blog()
{
    const [blogs,setBlogs] =  useState([]);
    const [user, setUser] = useState({});
    const [state, toggleState] = useState(false);

    const[search, setSearch] = useState({
        query: ""
    })

    const [queryResult,setResult] = useState([])

    const[display,toggleDisplay] = useState(true);

    const handleDisplay = () => {
        toggleDisplay((prev) => prev? !prev: prev);
    }

    
    const handleToggle = (currState) => {
        toggleState((currState) => !currState);
    }

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/blog/${id}`);
    }

    

    useEffect(() => {
        axios.get('http://localhost:8080/user')
        .then(response => {
            console.log("API response data:", response.data);
            setUser(response.data);
        })
        .catch(error => {
            console.log(error)
        })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:8080/getblogs')
        .then(response => {
            console.log('API response data:', JSON.stringify(response.data,null,2));
            setBlogs(response.data);
        })
        .catch(error => {
            console.error(error);
        })
    }, []);

    const recent =  blogs[0];
    const recent2 = blogs.slice(0,3);

    const manageQuery = (e) => {
        setSearch((prev) => ({...prev,[e.target.name]: e.target.value}));
    }

    const submitQuery = async (e) => {
        e.preventDefault();
        if (!search.query.trim()){
            alert("Your query is empty");
            return;
        }
        try{
            const response = await fetch('http://localhost:8080/query',{
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    query: search.query,
                })
    
        })

        if (!response.ok){
            throw new Error("There appears to be an error with that request");
        }
 
        const data = await response.json();
        console.log("Search results:", data);
        console.log(JSON.stringify(data,null,2));
        setResult(data);

        }catch(err){
            console.error("Error:", err);
            alert("An error occured while searching.");
        }
       
    

        
       
    }


    return(<>

   

    
    
    {user.username ? <h1 className="Title">{user.username}</h1>: null}
    <h1 className="Title">Blogs</h1>
    <form onSubmit={submitQuery}>
        <div className="searchBar">
        <input type="text" placeholder = "Search" name="query" id="query" onChange={manageQuery} value={search.query}></input>
        <button type="submit" onClick={() => handleDisplay()}>Search</button>
        </div>
        
    </form>
    <section className="queryContainer">
    {queryResult.map((query)=> {
        const words = query.Text.split('');
        const shortText = words.splice(0,100);
        return(<div className="Result" key={query.blog_id} onClick={()=>handleClick(query.blog_id)}>
            <h1>{query.Title}</h1>
            <div className="Summary">
                <div className="sumimg">
                    <img src={query.image} />
                </div>
                <p>{shortText} .........</p>
            </div>
            

        </div>)
    })}
    </section>
    
    {display && <div className="Preview">
    {recent &&  (<div className="NewBlog">
        <img src={recent.image} onClick={()=> handleClick(recent.blog_id)}></img>
        <div className="top-left">Newest Blog</div>
        <div className="bottom-left">{recent.Title}</div>
    </div>) }
    
    <h1 className="Title">Recent Blogs</h1>
    <div className ="recentBlogs">
    {recent2.map((blog)=> {
        return(<div className="recentBlog" key={blog.blog_id}>
            <img src={blog.image} onClick={()=> handleClick(blog.blog_id)}></img>
            <div className="bottom-left">{blog.Title}</div>
        </div>)
    }) }

    </div>

    <h1 className="Title" onClick={()=> handleToggle(state)}>Show More</h1>
    
    {state && (<div className="allBlogs">
        {blogs.map((blog) => {
            return(
            <div key = {blog.blog_id} className="blogPrev">
                <div className="blogImg">
                    <img src= {blog.image} onClick={() => handleClick(blog.blog_id)}></img>
                    <div className="bottom-left">{blog.Title}</div>

                </div>
                
        

            </div>
            )
        })}
        
    </div>)}
    </div>}
    

   
    
    </>)


}