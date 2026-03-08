"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signup(){

  const router = useRouter();

  const [form,setForm] = useState({
    name:"",
    email:"",
    password:""
  });

  function handleChange(e){

    setForm({...form,[e.target.name]:e.target.value});

  }

  function handleSignup(e){

    e.preventDefault();

    localStorage.setItem("user",JSON.stringify(form));

    alert("Signup successful");

    router.push("/auth/login");

  }

  return(

    <div style={{maxWidth:"400px",margin:"60px auto",padding:"30px",border:"1px solid #ddd",borderRadius:"10px"}}>

      <h2 style={{textAlign:"center"}}>Signup</h2>

      <form onSubmit={handleSignup}>

        <input
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
          style={{width:"100%",padding:"10px",marginBottom:"10px"}}
        />

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
          style={{width:"100%",padding:"10px",marginBottom:"10px"}}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
          style={{width:"100%",padding:"10px",marginBottom:"20px"}}
        />

        <button
          type="submit"
          style={{width:"100%",padding:"10px",background:"#2e7d32",color:"white",border:"none"}}
        >
          Signup
        </button>

      </form>

    </div>

  );

}