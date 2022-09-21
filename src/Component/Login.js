import React, { useRef, useState } from 'react'
import axios from 'axios';

const Login = () => {
  const checkEmail = useRef()
  const [user,setUser] = useState(
    {
      email : "",
      password : "",
    }
  );

  const handleOnChange = (e)=>{
    const {name,value} = e.target;
      setUser((preve)=>{
        return{
          ...preve,
          [name] : value
        }
      })

  }
  
  const handleOnSubmit = (e) =>{
    e.preventDefault();
    if(checkEmail.current.value){
    }
    else{
      checkEmail.current.focus();
    }
    const {email,password} = user;
    axios.post("http://localhost:9002/login/",user)
    .then(res => console.log(res))


  }

  return (
    <div>
        <form onSubmit={handleOnSubmit}>
        <label htmlFor="lemail">Email Id</label>
        <input 
          type="email" 
          placeholder="Enter the Email Id" 
          id='lemail' 
          onChange={handleOnChange}
          name="email"
          value={user.email}
          ref={checkEmail}
          />
        
        <label htmlFor='lpassword'>Password</label>
        <input 
          type="password" 
          placeholder="Enter the Password" 
          id="lpassword" 
          onChange={handleOnChange}
          name="password"
          value={user.password}

          />

        <button className="btn">Login</button>
                <p className='or'>OR</p>
        <button className="btn">Register</button>
        </form>
    </div>
  )
}

export {Login}