import React, { useState } from 'react'
import axios from "axios"

const Register = () => {
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    password: "",
    repassword: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser((preve) => {
      return {
        ...preve,
        [name]: value,
      }
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    const { email, password, fname, lname, mobile, repassword } = user;
    if (email && password && fname && lname && mobile && password) {
        if (password === repassword) {
          
          axios.post("http://localhost:9002/register/",user)
          .then(res => console.log(res))

          alert("done")
        }
        else {
          alert("Check Your Password")
        }
    }
    else {
      alert("Enter the Required Fields")
    }


  }

  return (
    <div>
      <form>
        <label htmlFor='fname'>First Name</label>
        <input type="text" placeholder="First Name" id="fname" name='fname' onChange={handleOnChange} value={user.fname} />

        <label htmlFor='lname'>Last Name</label>
        <input type="text" placeholder="Enter the last" id="lname" name='lname' onChange={handleOnChange} value={user.lname} />

        <label htmlFor='email'>Email Id</label>
        <input type="text" placeholder="Enter the email" id="email" name='email' onChange={handleOnChange} value={user.email} />

        <label htmlFor='Mobile'>Mobile</label>
        <input type="text" placeholder="Enter the Mobile" id="Mobile" name="mobile" onChange={handleOnChange} value={user.mobile} />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder='Enter the password' name="password" onChange={handleOnChange} value={user.password} />

        <label htmlFor="repassword">Password</label>
        <input type="password" id="repassword" placeholder='Enter the re-password' name='repassword' onChange={handleOnChange} value={user.repassword} />

        <button className='btn' onClick={handleRegister}>Register</button>
      </form>
    </div>
  )
}

export default Register