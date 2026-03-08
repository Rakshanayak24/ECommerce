"use client"; // must be first line

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CheckoutSteps from "../../components/CheckoutSteps";
import OrderSummary from "../../components/OrderSummary";
import Link from "next/link";

export default function CheckoutPage() {
  const { cartData, shippingAddress, setShippingAddress } = useContext(CartContext);

  const handleChange = (e) => {
    setShippingAddress({ ...shippingAddress, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <CheckoutSteps step={1} />
      <h1 className="text-2xl font-bold mb-4">Shipping Address</h1>
      <form className="space-y-4">
        <input
          name="fullName"
          placeholder="Full Name"
          value={shippingAddress.fullName || ""}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={shippingAddress.email || ""}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          value={shippingAddress.phone || ""}
          onChange={handleChange}
        />
        <input
          name="pinCode"
          placeholder="PIN Code"
          value={shippingAddress.pinCode || ""}
          onChange={handleChange}
        />
        <input
          name="city"
          placeholder="City"
          value={shippingAddress.city || ""}
          onChange={handleChange}
        />
        <input
          name="state"
          placeholder="State"
          value={shippingAddress.state || ""}
          onChange={handleChange}
        />
      </form>
      <OrderSummary data={cartData} />
      <Link href="/payment">
        <button className="bg-green-600 text-white px-4 py-2 rounded mt-4">
          Proceed to Payment
        </button>
      </Link>
    </div>
  );
}
