"use client";

import Link from "next/link";
import { UserProvider, UserContext } from "../context/UserContext";
import { useContext } from "react";

export default function RootLayout({ children }) {
  return (
    <UserProvider>
      <Header />
      <main>{children}</main>
    </UserProvider>
  );
}

function Header() {
  const { user, logout } = useContext(UserContext);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "15px 40px",
        background: "#2e7d32",
        color: "white",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Ecoyaan Store 🌱</h1>

      <nav style={{ display: "flex", gap: "15px" }}>
        {!user ? (
          <>
            <Link href="/auth/login" style={{ color: "white" }}>
              Login
            </Link>
            <Link href="/auth/signup" style={{ color: "white" }}>
              Signup
            </Link>
          </>
        ) : (
          <>
            <Link href="/orders" style={{ color: "white" }}>
              Orders
            </Link>
            <Link href="/track" style={{ color: "white" }}>
              Track Orders
            </Link>
            <button
              onClick={logout}
              style={{
                background: "transparent",
                border: "1px solid white",
                padding: "4px 10px",
                borderRadius: "4px",
                color: "white",
                cursor: "pointer",
              }}
            >
              Logout
            </button>
          </>
        )}
      </nav>
    </header>
  );
}
