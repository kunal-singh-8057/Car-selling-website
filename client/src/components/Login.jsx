import React from 'react'
import { useState } from 'react'
import '../components/Signup.css'
import img1 from '../assets/img/hero.jpg'
import { Link,useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Login = () => {

      const[email,setemail] = useState("");
      const[password,setpassword] = useState("");

      
          const navigate = useNavigate();


      const login = ()=>{
        Axios.post("http://localhost:4500/api/v1/login",{
            email:email,
            password:password
        }).then((response)=>{
           
            if(response.data === "success")
            {
                alert("Data Added successfully Proceed to login")
                navigate("/home")
            }

            else
            {
                alert("Somethinh went wrong")
            }
        }).catch((error)=>{
            console.log(error)
        })

      }
  return (
    <>

     <div className='form1'>
        <img src={img1} className='formbackimage'></img>
    
    
        <div className='formsets'>
            <h1>Login</h1>
            <br></br>
            <input placeholder='Entr the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
            <br></br>
            <input placeholder='Entr the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
            <br></br>
            <button onClick={login}>Login</button>
            <br></br>
            <br></br>
            <p>Don't Have An Account Yet : <Link to='/' className='loginbtn'>Signup</Link></p>
        </div>
    
      </div>


    </>
  )
}

export default Login