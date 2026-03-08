"use client";

import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Link from "next/link";

export default function PaymentPage() {
  const { cartData, shippingAddress, addOrder } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [upiNumber, setUpiNumber] = useState("");

  const handlePayment = () => {
    if(paymentMethod === "UPI" && upiNumber.trim() === "") {
      alert("Please enter your UPI number");
      return;
    }
    // Save order
    addOrder({ cart: cartData, shipping: shippingAddress, payment: paymentMethod, upi: upiNumber });
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded mt-6">
      <h2 className="text-xl font-bold mb-4">Payment</h2>

      <div className="flex flex-col gap-4">
        <label>
          <input
            type="radio"
            name="payment"
            value="Credit/Debit Card"
            checked={paymentMethod === "Credit/Debit Card"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="ml-2">Credit/Debit Card</span>
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="UPI"
            checked={paymentMethod === "UPI"}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          <span className="ml-2">UPI</span>
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

      <button
        onClick={handlePayment}
        className="mt-6 bg-green-600 text-white px-4 py-2 rounded"
      >
        Pay Securely
      </button>

      <div className="mt-4">
        <Link href="/">
          <button className="px-4 py-2 bg-gray-300 rounded">Back to Cart</button>
        </Link>
      </div>
    </div>
  );
}
