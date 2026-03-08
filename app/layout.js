"use client"; // Must be client for interactive header

import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ecoyaan Checkout</title>
      </head>
      <body className="bg-gray-100 min-h-screen">
        <CartProvider>
          <Header /> {/* Header shows login/logout/order buttons */}
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
