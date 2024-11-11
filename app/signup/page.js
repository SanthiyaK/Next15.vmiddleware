"use client"

import { useState } from "react"
import { UserRegister } from "../action"


export default  function UserForm() {
    const [message,setMessage]=useState()
   const handleSubmit = async (formData) => {
    const result=await UserRegister(formData)
    setMessage(result.message)
    setTimeout(()=>{
        setMessage(null);
    },2000)
   }
  return (
    <>
    <form  action={handleSubmit}
     className="m-20">
       <h1 className="m-10">Register Form</h1>  
     <label className="m-10  p-1 mb-5 ">Email</label> <br/>
      <input className=" border border-blue-500 rounded m-2 "
       type="email" 
       name="email"/>
       <br/>
     <label className="m-10 p-2">Password</label><br/>
      <input className="border border-blue-500 rounded m-1" 
       type="password" 
       name="password"/>
       <br/>
     <button className="m-10 bg-violet-500 p-2" 
       type="submit">Register
     </button>
    </form>
  {message&& <p className="m-11">{message}</p>}
    
    </>
  )
}
