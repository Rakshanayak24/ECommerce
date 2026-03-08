"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login(){

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  function handleLogin(e){

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if(!user){
      alert("No account found. Please signup.");
      return;
    }

    if(user.email === email && user.password === password){

      localStorage.setItem("loggedIn","true");

      alert("Login Successful");

      router.push("/");

    }else{

      alert("Invalid email or password");

    }

  }

  return(

    <div
      style={{
        maxWidth:"400px",
        margin:"80px auto",
        padding:"30px",
        background:"white",
        borderRadius:"10px",
        boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
      }}
    >

      <h2 style={{textAlign:"center"}}>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          placeholder="Email"
          required
          onChange={(e)=>setEmail(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"10px",
            borderRadius:"5px",
            border:"1px solid #ccc"
          }}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e)=>setPassword(e.target.value)}
          style={{
            width:"100%",
            padding:"10px",
            marginBottom:"20px",
            borderRadius:"5px",
            border:"1px solid #ccc"
          }}
        />

        <button
          type="submit"
          style={{
            width:"100%",
            padding:"12px",
            background:"#2e7d32",
            color:"white",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
          }}
        >
          Login
        </button>

      </form>

      <p style={{marginTop:"20px",textAlign:"center"}}>

        Don't have an account?

        <a href="/auth/signup"> Signup</a>

      </p>

    </div>

  );

}