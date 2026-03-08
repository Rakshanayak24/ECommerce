import Navbar from "../components/Navbar";

export const metadata = {
  title: "EcoShop Checkout",
  description: "Mini Ecommerce Store"
};

export default function RootLayout({ children }) {

  return (

    <html lang="en">

      <body
        style={{
          margin:0,
          fontFamily:"Arial, sans-serif",
          background:"#f5f5f5"
        }}
      >

        <Navbar/>

        <div style={{padding:"30px"}}>
          {children}
        </div>

      </body>

    </html>

  );

}