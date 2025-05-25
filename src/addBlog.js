import React, {useState} from 'react';

export default function Addblog(){
    const [blog, setBlog] = useState({
        Title: "",
        image: "",
        Text: "",
    })

    const handleInput = (e) => {
        setBlog({...blog, [e.target.name] : e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/postBlog', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                Title: blog.Title,
                image: blog.image,
                Text: blog.Text,
            })

        })

        const responsetext = await response.text();
        alert(responsetext);
    }

　　return(<>
   <h1 className='Title'>Add Blog</h1>

   <form onSubmit={handleSubmit}>

    <div className = "Form-Contents">
        <label for = "Title">Title</label>
        <input type = "text" name = "Title" id="Title" placeholder="Title"  required onChange={handleInput}></input>
        <label for = "image">image</label>
        <input type = "text" name = "image" id="image" placeholder="add image source"  required onChange={handleInput}></input>
        <label for = "Text">Blog Text</label>
        <input type = "text" name = "Text" id="Text" placeholder="add Blog Text"  required onChange={handleInput}></input>
        <button>Add Blog</button>

    </div>

   </form>

   

   

   

   
</>)

}