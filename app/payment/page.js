"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage(){

  const router = useRouter();

  const [method,setMethod] = useState("cod");

  function placeOrder(){

    const shipping = JSON.parse(localStorage.getItem("shipping"));

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      shipping,
      method,
      status:"Processing",
      date:new Date().toLocaleDateString()
    };

    orders.push(newOrder);

    localStorage.setItem("orders",JSON.stringify(orders));

    alert("Order Placed Successfully");

    router.push("/orders");

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

      <h2 style={{marginBottom:"20px"}}>Payment Method</h2>

      <div style={cardStyle}>

        <label style={labelStyle}>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={method==="cod"}
            onChange={(e)=>setMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label style={labelStyle}>
          <input
            type="radio"
            name="payment"
            value="upi"
            onChange={(e)=>setMethod(e.target.value)}
          />
          UPI Payment
          alert("Please enter your UPI number");
        </label>

        <label style={labelStyle}>
          <input
            type="radio"
            name="payment"
            value="card"
            onChange={(e)=>setMethod(e.target.value)}
          />
          Debit / Credit Card
          alert("Please enter your Card number");
        </label>

      </div>

      <button onClick={placeOrder} style={buttonStyle}>
        Place Order
      </button>

    </div>

  );
}

const cardStyle={
  border:"1px solid #ddd",
  padding:"20px",
  borderRadius:"8px",
  marginBottom:"20px"
};

const labelStyle={
  display:"block",
  marginBottom:"10px",
  fontSize:"15px"
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
