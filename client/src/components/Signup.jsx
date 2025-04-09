import React, { useState } from 'react'
import '../components/Signup.css'
import img1 from '../assets/img/hero.jpg'
import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

const Signup = () => {

    const[name,setname] = useState("");
    const[email,setemail] = useState("");
    const[password,setpassword] = useState("");

    const navigate = useNavigate();

    const signup = ()=>{
        Axios.post("http://localhost:4500/api/v1/register",{
            name:name,
            email:email,
            password:password
        }).then((response)=>{
           
            if(response.data === "success")
            {
                alert("Data Added successfully Proceed to login")
                navigate("/login")
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
        <h1>Signup</h1>
        <br></br>
        <input placeholder='Enter the name here' onChange={(e)=>{setname(e.target.value)}}></input>
        <br></br>
        <input placeholder='Enter the email here' onChange={(e)=>{setemail(e.target.value)}}></input>
        <br></br>
        <input placeholder='Enter the password here' onChange={(e)=>{setpassword(e.target.value)}}></input>
        <br></br>
        <button onClick={signup}>Signup</button>
        <br></br>
        <br></br>
        <p>Already have an Accounts : <Link to='/login' className='loginbtn'>Login</Link></p>
    </div>

  </div>

  </>
  )
}

export default Signup