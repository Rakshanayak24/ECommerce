"use client";

import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Link from "next/link";

export default function Header() {
  const { user, logout } = useContext(CartContext);

  return (
    <header className="flex justify-between p-4 bg-green-600 text-white">
      <h1 className="text-lg font-bold">Ecoyaan Store</h1>
      <div className="space-x-2">
        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button onClick={logout} className="px-2 py-1 bg-red-500 rounded">Logout</button>
            <Link href="/orders"><button className="px-2 py-1 bg-blue-500 rounded">Orders</button></Link>
          </>
        ) : (
          <>
            <Link href="/auth/login"><button className="px-2 py-1 bg-white text-green-600 rounded">Login</button></Link>
            <Link href="/auth/signup"><button className="px-2 py-1 bg-white text-green-600 rounded">Signup</button></Link>
          </>
        )}
      </div>
    </header>
  );
}
