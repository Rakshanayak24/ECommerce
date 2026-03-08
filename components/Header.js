"use client";

import { useContext } from "react";
import Link from "next/link";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const { user, logout } = useContext(CartContext);

  return (
    <header className="flex justify-between items-center p-4 bg-green-600 text-white shadow-md">
      <h1 className="text-xl font-bold">Ecoyaan Store 🌱</h1>
      <div className="flex gap-2">
        {user ? (
          <>
            <span className="px-2 py-1 bg-green-700 rounded">Hi, {user.name}</span>
            <button onClick={logout} className="px-2 py-1 bg-red-500 rounded">Logout</button>
            <Link href="/orders">
              <button className="px-2 py-1 bg-blue-500 rounded">Track Orders</button>
            </Link>
          </>
        ) : (
          <>
            <Link href="/auth/login">
              <button className="px-2 py-1 bg-white text-green-600 rounded">Login</button>
            </Link>
            <Link href="/auth/signup">
              <button className="px-2 py-1 bg-white text-green-600 rounded">Signup</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
