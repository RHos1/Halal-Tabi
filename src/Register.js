import {useState} from 'react';

export default function Register(){

    const[formData, setData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        const response = await fetch("http://localhost:8080/register-submit", {
            method : 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                username : formData.username,
                password: formData.password
            })
        });
         
        const result = await response.text();
        alert(result);
    }

    

   


    return(<>


    <form onSubmit={handleSubmit}>
        <div className = "Form-Contents">
            <label for = "Username" >Username</label>
            <input type="text" name="username" id = "username" minLength = "4" maxLength = "20" required onChange={handleChange}/>
            <label for = "Password" >Password</label>
            <input type="password" name = "password" id="password" required minLength ="8" maxLength= "40" onChange={handleChange}/>
            <label for = "ConfirmPassword"  >Confirm Password</label>
            <input type="password" name = "confirmPassword" id="confirmPassword"  minLength = "8" maxLength = "40" required onChange={handleChange}/>
            <button type="submit">Register</button>
           

        </div>
    </form>
    </>)
}