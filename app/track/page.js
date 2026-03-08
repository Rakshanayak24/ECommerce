"use client";

import { useState } from "react";

export default function TrackOrder(){

  const [orderId,setOrderId] = useState("");
  const [order,setOrder] = useState(null);

  function handleTrack(){

    const orders = JSON.parse(localStorage.getItem("orders")) || [];

    const found = orders.find(o => o.id.toString() === orderId);

    if(found){
      setOrder(found);
    }else{
      alert("Order not found");
      setOrder(null);
    }

  }

  const steps = ["Processing","Shipped","Out for Delivery","Delivered"];

  return(

    <div style={{
      maxWidth:"700px",
      margin:"50px auto",
      background:"white",
      padding:"30px",
      borderRadius:"10px",
      boxShadow:"0 3px 10px rgba(0,0,0,0.1)"
    }}>

      <h2 style={{marginBottom:"20px"}}>Track Your Order</h2>

      {/* Search */}

      <div style={{display:"flex",gap:"10px",marginBottom:"25px"}}>

        <input
          placeholder="Enter Order ID"
          value={orderId}
          onChange={(e)=>setOrderId(e.target.value)}
          style={{
            flex:1,
            padding:"12px",
            borderRadius:"6px",
            border:"1px solid #ccc"
          }}
        />

        <button
          onClick={handleTrack}
          style={{
            padding:"12px 20px",
            background:"#2e7d32",
            color:"white",
            border:"none",
            borderRadius:"6px",
            cursor:"pointer"
          }}
        >
          Track
        </button>

      </div>

      {order && (

        <div>

          {/* Order Info */}

          <div style={{
            border:"1px solid #ddd",
            padding:"20px",
            borderRadius:"8px",
            marginBottom:"25px"
          }}>

            <p><b>Order ID:</b> {order.id}</p>

            <p><b>Date:</b> {order.date}</p>

            <p><b>Payment:</b> {order.method}</p>

            <p><b>Status:</b> {order.status}</p>

          </div>

          {/* Status Progress */}

          <div>

            {steps.map((step,index)=>{

              const currentIndex = steps.indexOf(order.status);

              const completed = index <= currentIndex;

              return(

                <div
                  key={index}
                  style={{
                    display:"flex",
                    alignItems:"center",
                    marginBottom:"12px"
                  }}
                >

                  <div
                    style={{
                      width:"18px",
                      height:"18px",
                      borderRadius:"50%",
                      background: completed ? "#2e7d32" : "#ccc",
                      marginRight:"10px"
                    }}
                  />

                  <span
                    style={{
                      color: completed ? "#2e7d32" : "#888",
                      fontWeight: completed ? "bold" : "normal"
                    }}
                  >
                    {step}
                  </span>

                </div>

              );

            })}

          </div>

        </div>

      )}

    </div>

  );

}