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

          <input
            type="radio"
            name="payment"
            value="Credit/Debit Card"
            checked={paymentMethod === "Credit/Debit Card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit/Debit Card
        </label>

        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          UPI
        </label>

        {paymentMethod === "UPI" && (
          <input
            type="text"
            placeholder="Enter UPI number"
            value={upiNumber}
            onChange={(e) => setUpiNumber(e.target.value)}
            className="border p-2 rounded mt-2"
          />
        )}
      </div>

      <button
        onClick={handlePayment}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Pay Securely
      </button>

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
