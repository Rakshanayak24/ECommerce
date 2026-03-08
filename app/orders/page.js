"use client";

import { useEffect,useState } from "react";

export default function Orders(){

  const [orders,setOrders] = useState([]);

  useEffect(()=>{

    const data = JSON.parse(localStorage.getItem("orders")) || [];

    setOrders(data);

  },[]);

  return(

    <div style={{padding:"40px"}}>

      <h2>Your Orders</h2>

      {orders.length===0 && <p>No orders yet</p>}

      {orders.map((order,index)=>(

        <div key={index} style={{border:"1px solid #ddd",padding:"20px",marginBottom:"20px"}}>

          <p><b>Order ID:</b> {order.id}</p>

          <p><b>Status:</b> {order.status}</p>

          <p><b>Date:</b> {order.date}</p>

          <p><b>Customer:</b> {order.shipping?.name}</p>

          <p><b>Phone:</b> {order.shipping?.phone}</p>

          <p><b>Email:</b> {order.shipping?.email}</p>

        </div>

      ))}

    </div>

  );

}