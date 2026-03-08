"use client";

import { CartProvider } from "../context/CartContext";
import Header from "../components/Header";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ecoyaan Store</title>
      </head>
      <body className="bg-gray-100 min-h-screen">
        <CartProvider>
          <Header />
          <main className="mt-4">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
