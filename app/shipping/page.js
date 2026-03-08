"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ShippingPage(){

  const router = useRouter();

  const [form,setForm] = useState({
    name:"",
    phone:"",
    email:"",
    address:"",
    city:"",
    pincode:""
  });

  function handleChange(e){
    setForm({...form,[e.target.name]:e.target.value});
  }

  function handleSubmit(e){
    e.preventDefault();

    localStorage.setItem("shipping",JSON.stringify(form));

    router.push("/payment");
  }

  return(

    <div style={{
      maxWidth:"600px",
      margin:"50px auto",
      background:"white",
      padding:"30px",
      borderRadius:"10px",
      boxShadow:"0 3px 10px rgba(0,0,0,0.1)"
    }}>

      <h2 style={{marginBottom:"20px"}}>Shipping Details</h2>

      <form onSubmit={handleSubmit}>

        <input
          name="name"
          placeholder="Full Name"
          required
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="phone"
          placeholder="Phone Number"
          required
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="email"
          placeholder="Email Address"
          required
          onChange={handleChange}
          style={inputStyle}
        />

        <textarea
          name="address"
          placeholder="Full Address"
          required
          onChange={handleChange}
          style={{...inputStyle,height:"80px"}}
        />

        <input
          name="city"
          placeholder="City"
          required
          onChange={handleChange}
          style={inputStyle}
        />

        <input
          name="pincode"
          placeholder="Pincode"
          required
          onChange={handleChange}
          style={inputStyle}
        />

        <button type="submit" style={buttonStyle}>
          Continue to Payment
        </button>

      </form>

    </div>

  );
}

const inputStyle={
  width:"100%",
  padding:"12px",
  marginBottom:"15px",
  borderRadius:"6px",
  border:"1px solid #ccc",
  fontSize:"14px"
};

const buttonStyle={
  width:"100%",
  padding:"12px",
  background:"#2e7d32",
  color:"white",
  border:"none",
  borderRadius:"6px",
  fontSize:"16px",
  cursor:"pointer"
};