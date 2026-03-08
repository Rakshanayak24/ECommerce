"use client";

import { CartProvider } from "../context/CartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Ecoyaan Checkout</title>
      </head>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
