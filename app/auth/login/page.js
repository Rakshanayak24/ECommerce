"use client";

import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../../../context/CartContext";

export default function LoginPage() {
  const { user, login } = useContext(CartContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  useEffect(() => {
    if(user) router.push("/"); // redirect if already logged in
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({ email, name: email.split("@")[0] }); // simple mock login
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded mb-4"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}
