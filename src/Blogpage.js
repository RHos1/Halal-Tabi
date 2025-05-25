import {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom";

export default function Blogpage(){
    const {id} = useParams();
    
    const [comment, setComment] = useState({
        BlogID : "",
        Comment: "", 
    });
    
    const [blogs,setBlogs] = useState([]);

    const [comments, setComments] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/getblogs')
        .then(response => {
            console.log("API retrieve Data",JSON.stringify(response.data,null,2));
            setBlogs(response.data);
        })
        .catch(err => {
            console.error(err);
        })
        
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if((!comment.BlogID) || (!comment.Comment)){
            console.log("There appears to be a missing field for your comments");
            return;
        }
        const response = await fetch('http://localhost:8080/addComment',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                blog_id: comment.BlogID,
                blog_text: comment.Comment,
            })

            
        })
        if (!response.ok){
            const err = await response.text();
            console.error("Server error:", err);
            alert("Failed to Submit comment: " + err);
            return;
        }
        const responseText = await response.text();
        alert(responseText);
    }

    useEffect(()=> {
        if (!blogs.length) return;
        const currentItem = blogs.find((blog) => blog.blog_id === Number(id));
        if (currentItem){
            setComment(prev => ({...prev,BlogID: currentItem.blog_id}));
           

            fetch('http://localhost:8080/getComments',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    blog_id : currentItem.blog_id
                })
    
    
            })
            .then(res => {
                if (!res.ok){
                    throw new Error("Failed to fetch");
                     
                }
                return res.json();
            })
            
            .then(data => {
                console.log("Fetched Comment Data:", data)
                const commentList = Array.isArray(data) ? data : [data];
                setComments(commentList);
        })
            .catch(err => {console.error("Error fetching comments", err)}
        )
        
            

        }

        
         }, [blogs, id]);
        
       

   

    
    const item = blogs.find((blog) => blog.blog_id === Number(id));
    const handleChange = (e) => {
        setComment({...comment,[e.target.name]: e.target.value})
    }

    

    
                 

    return (<>
    {item ?  <div className = "BlogEntry">
        <h1>{item.Title}</h1>
        <div className = "BlogImage">
            <img src={item.image}></img>
        </div>
        <p>{item.Text}</p>
    </div>: null}

    <h1 className="Header2">Comments</h1>
    {comments.map((comment) => {
        return(<div key={comment.comments_id} className="Comment">
        <p>{new Date(comment.timestamp).toLocaleString()}</p>
        <p>{comment.blog_text}</p>
        </div>)
    })}
    

    {blogs.length > 0 && (<form onSubmit ={handleSubmit}>
        <div className="commentForm">
        
        
            <input type="hidden" name="BlogID" id="BlogID" value={comment.BlogID} ></input>
            <textarea id="Comment" name="Comment" value={comment.Comment} onChange = {handleChange} ></textarea>
            <button type="submit">Add</button>
        </div>
    </form>)}
    </>)
    
}