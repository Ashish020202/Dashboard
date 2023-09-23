"use client";
// import {useNavigate} from "react-router-dom";
import { useRouter } from "next/router";
export default function Signin(){
  // const navigate = useNavigate()
    return <div className="justify-center md:mt-56">  
     <div className="bg-white max-w-xs mx-auto p-6 rounded shadow-md ">
    <h2 className="text-2xl font-semibold ">Sign In</h2>
    <p className="mt-0 mb-4">SignIn to your account</p>
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
        <input type="email" id="email" className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
        <input type="password" id="password" className="w-full px-3 py-2 border rounded-lg" />
      </div>
      <button type="submit" className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 w-full" 
      //  onClick={() => { navigate("/Dashboard")}}
       >
        SignIn
      </button>
    </form>
  </div>
  </div>
}