import {useState} from 'react'

export default function Login(){
    const [formData,setData] = useState({
        username: "",
        password: "",
    })

    const handleChange = (e) => {
        setData({...formData, [e.target.name] : e.target.value});
    }

    const handleSubmit =  async (e) => {
        e.preventDefault();
        const response =  await fetch("http://localhost:8080/login-val", {
            method : "POST",
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                username: formData.username,
                password: formData.password
            })
        })
        const result = await response.json();
        alert(result.msg);
    }



    return(<>

<h1 className='Title'>Login</h1>
    
<form  onSubmit={handleSubmit} >
    <div className = "Form-Contents">
        <label htmlFor = "Username" >Username</label>
        <input type="text" name="username" id = "username" placeholder="example@email.com" minLength ="4" maxLength ="20" required onChange={handleChange} />
        <label htmlFor = "Password" >Password</label>
        <input type="password" name = "password" id="password"  placeholder = "password" required minLength="8" maxLength="40" onChange={handleChange} />
        <button type="submit">Login</button>
       

    </div>
    </form>

    </>)



}