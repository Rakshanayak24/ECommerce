# Ecoyaan Checkout Flow

A simplified **E-commerce Checkout Flow** inspired by Ecoyaan built using **Next.js (App Router)**, **React**, and **Tailwind CSS / Custom UI**.

This project demonstrates a complete checkout journey including **login, cart management, shipping details, payment selection, order placement, and order tracking**.

---

## Features

- 🔐 **User Authentication**
  - Login and Signup pages
  - Mandatory login before accessing the store

- 🛒 **Cart System**
  - View cart items
  - Select products
  - Remove items from cart
  - Order summary with subtotal and shipping

- 📦 **Checkout Flow**
  - Shipping address form (Name, Phone, Email, Address, City, Pincode)
  - Payment method selection (COD / UPI / Card)

- 📄 **Order Management**
  - Place orders
  - View placed orders
  - Order details stored in Local Storage

- 🚚 **Order Tracking**
  - Track order using Order ID
  - Delivery status progress
  - Processing → Shipped → Out for Delivery → Delivered

- 🎨 **Responsive UI**
  - Clean checkout UI
  - Card-based layouts
  - Mobile-friendly design

---

## Tech Stack

- **Next.js 14 (App Router)**
- **React**
- **Tailwind CSS / Custom CSS**
- **LocalStorage** for data persistence
- **JavaScript (ES6+)**

---

## Project Structure
```bash
app
├ layout.js
├ page.js
├ shipping/page.js
├ payment/page.js
├ orders/page.js
├ track/page.js
└ auth
├ login/page.js
└ signup/page.js

components
├ Navbar.js
├ CartItem.js
└ OrderSummary.js
```


---

## Run Locally

Clone the project and install dependencies:

```bash
npm install
```
If Tailwind CSS is required:
```bash
npm install -D tailwindcss postcss autoprefixer
```
Start the development server:
```bash
npm run dev
```
Open in browser:
```bash
http://localhost:3000
```

### Deployment
- Push the project to GitHub
- Import the repository in Vercel
- Deploy the project
- Your app will be live in seconds.

### Future Improvements
- Database integration (MongoDB / Firebase)
- Real payment gateway (Stripe / Razorpay)
- User authentication with backend
- Order history API
- Admin dashboard
