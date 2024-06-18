import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const Bas = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [gender,setGender]=useState("");
    
    const submit = ()=>{
        axios.post("/app/v1",{name,email,gender})
        .then((res)=>{
            console.log("data send successfully");
        })
        .catch((err)=>{
            res.send("Error occured",err);
        });
    }
    return (
    <div className='bas' style={{backgroundColor:"yellow",width:"450px"}}>
      <label for="exampleFormControlInput12" class="form-label">Name
      <input type="text" class="form-control" onChange={(e)=>{setName(e.target.value)}} id="exampleFormControlInput12" placeholder="Enter your name"/>
      </label>
<hr/>
  <label for="exampleFormControlInput1" class="form-label">Email address
  <input type="email" class="form-control" onChange={(e)=>{setEmail(e.target.value)}} id="exampleFormControlInput1" placeholder="name@example.com"/>
  </label>
  <hr/>
    <label>Male
        <input type='radio' value={0} onClick={(e)=>{setGender("male")}} name='gender' />
    </label>
    <label>Female<input type='radio' onClick={(e)=>{setGender("female")}} value={1} name='gender'/></label>
    <hr/>
    <button onClick={submit}>Login</button>
    
    

    </div>
  )
}

export default Bas
