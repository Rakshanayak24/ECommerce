"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PaymentPage() {
  const router = useRouter();

  const [method, setMethod] = useState("cod"); // default COD
  const [upiNumber, setUpiNumber] = useState("");

  function placeOrder() {
    const shipping = JSON.parse(localStorage.getItem("shipping"));
    if (!shipping) {
      alert("Shipping address not found!");
      return;
    }

    if (method === "UPI" && upiNumber.trim() === "") {
      alert("Please enter your UPI number");
      return;
    }

    let orders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(),
      shipping,
      method,
      upi: method === "UPI" ? upiNumber : null,
      status: "Processing",
      date: new Date().toLocaleDateString(),
    };

    orders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(orders));

    alert("Order Placed Successfully!");
    router.push("/orders");
  }

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "50px auto",
        background: "white",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>Payment Method</h2>

      <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", marginBottom: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px", fontSize: "15px" }}>
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={method === "cod"}
            onChange={(e) => setMethod(e.target.value)}
            className="mr-2"
          />
          Cash on Delivery
        </label>

        <label style={{ display: "block", marginBottom: "10px", fontSize: "15px" }}>
          <input
            type="radio"
            name="payment"
            value="Credit/Debit Card"
            checked={method === "Credit/Debit Card"}
            onChange={(e) => setMethod(e.target.value)}
            className="mr-2"
          />
          Credit/Debit Card
        </label>

        <label style={{ display: "block", marginBottom: "10px", fontSize: "15px" }}>
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={method === "UPI"}
            onChange={(e) => setMethod(e.target.value)}
            className="mr-2"
          />
          UPI
        </label>

        {method === "UPI" && (
          <input
            type="text"
            placeholder="Enter UPI number"
            value={upiNumber}
            onChange={(e) => setUpiNumber(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "6px",
              marginTop: "10px",
            }}
          />
        )}
      </div>

      <button
        onClick={placeOrder}
        style={{
          width: "100%",
          padding: "12px",
          background: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "6px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}
