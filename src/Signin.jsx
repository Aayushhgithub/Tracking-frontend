import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';

const Signin = () => {

    const navigate = useNavigate();
    const [email, setEmail]= useState();
     const [password, setPassword]= useState();

     const handleSubmit= async ()=>{
        if(!email || !password){
            toast.success("Please enter the details")
        }else{
            navigate('/tracking')
        }
     }

  

  return (
    <div>
       <form  className="mt-16 flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200 bg-white">
                      <p className="text-2xl font-medium m-auto">
                          <span className="text-indigo-500">User</span> Login</p>
                      <div className="w-full ">
                          <p>Email</p>
                          <input
                              placeholder="type here"
                              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
                              name="email"
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                              type="email"
                              required
                          />
                      </div>
                      
                      <div className="w-full ">
                          <p>Password</p>
                          <input  name="password"  value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="password" required />
                      </div>                    
                  
                     <button className=" text-black w-full py-2 rounded-md cursor-pointer border border-indigo-500"  onClick={handleSubmit}>
                          Login
                      </button>
                  </form>
                  <ToastContainer/>
    </div>
  )
}

export default Signin
