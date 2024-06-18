import React from 'react'
import { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [femail,setEmail] = useState("");
    const [email,setMail] = useState("");
    const handle = ()=>{
        setEmail(email);
        console.log("Hello");
        // axios
        // .post("http://localhost:3000/app/v1",{femail})
        // .then((res)=>{
        //     console.log("Ok data is transfered ",res);
        // })
        // .catch((err)=>{
        //     console.log("Error is occured ",err);
        // });
        axios
        .get("/app/v1")
        .then((res)=>{
             console.log("Ok data is transfered ",res);
             })
        .catch(
            (err)=>{
                    console.log("Error is occured ",err);
                 }
        );
        // try{
        // const {data} = await axios.post("http://localhost:3000/app/v1",{femail});
        // }
        // catch(error){
        //     console.log("Error is occured");
        // }
    };

    // const handleGet = async () => {
    //     try {
    //       const response = await axios.get("/app/v1");
    //       console.log("Data has been transferred successfully", response);
    //     } catch (error) {
    //       console.error("An error occurred", error);
    //     }
    //   };
  return (
    <div>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" onChange={(e)=>{setMail(e.target.value);}} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  <textarea classNameName="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  <button type="button" onClick={handle} class="btn btn-primary">Click here</button>
{femail}
</div>

{email}

{femail}
    </div>
    
  )
}

export default Form
