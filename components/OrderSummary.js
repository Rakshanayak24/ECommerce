"use client";

import { useRouter } from "next/navigation";

export default function OrderSummary({ subtotal, shipping }) {

  const router = useRouter();
  const total = subtotal + shipping;

  const disabled = subtotal === 0;

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        width: "300px",
        height: "fit-content"
      }}
    >
      <h3>Order Summary</h3>

      <p>Subtotal: ₹{subtotal}</p>
      <p>Shipping: ₹{shipping}</p>

      <hr />

      <h3>Total: ₹{total}</h3>

      <button
        disabled={disabled}
        onClick={() => router.push("/shipping")}
        style={{
          marginTop: "20px",
          width: "100%",
          padding: "12px",
          background: disabled ? "#ccc" : "#2e7d32",
          color: "white",
          border: "none",
          cursor: disabled ? "not-allowed" : "pointer"
        }}
      >
        {disabled ? "Select a product first" : "Proceed to Checkout"}
      </button>

    </div>
  );
}