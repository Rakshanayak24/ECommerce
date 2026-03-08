"use client";

export default function Navbar(){

  const linkStyle={
    marginLeft:"20px",
    color:"white",
    textDecoration:"none",
    fontWeight:"bold"
  };

  function logout(){
    localStorage.removeItem("loggedIn");
    window.location.href="/auth/login";
  }

  return(

    <nav
      style={{
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"15px 40px",
        background:"#2e7d32",
        color:"white"
      }}
    >

      <h2 style={{margin:0}}>EcoShop</h2>

      <div>

        <a href="/" style={linkStyle}>Cart</a>

        <a href="/orders" style={linkStyle}>Orders</a>

        <a href="/track" style={linkStyle}>Track Order</a>

        <a href="/auth/login" style={linkStyle}>Login</a>

        <button
          onClick={logout}
          style={{
            marginLeft:"20px",
            padding:"6px 12px",
            border:"none",
            borderRadius:"5px",
            background:"white",
            color:"#2e7d32",
            cursor:"pointer"
          }}
        >
          Logout
        </button>

      </div>

    </nav>

  );

}