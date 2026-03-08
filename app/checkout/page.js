"use client";

import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { useRouter } from "next/navigation";
import CheckoutSteps from "../../components/CheckoutSteps";

export default function Checkout() {

  const router = useRouter();
  const { setShippingAddress } = useContext(CartContext);

  const [form,setForm] = useState({});

  function handleSubmit(e){
    e.preventDefault();

    if(!form.email?.includes("@")){
      alert("Invalid email");
      return;
    }

    if(form.phone?.length !== 10){
      alert("Phone must be 10 digits");
      return;
    }

    setShippingAddress(form);
    router.push("/payment");
  }

  return (
    <div style={{maxWidth:600,margin:"40px auto"}}>

      <CheckoutSteps step={1} />

      <form onSubmit={handleSubmit} style={{display:"flex",flexDirection:"column",gap:10}}>

        <input placeholder="Full Name" required onChange={e=>setForm({...form,name:e.target.value})}/>
        <input placeholder="Email" required onChange={e=>setForm({...form,email:e.target.value})}/>
        <input placeholder="Phone" required onChange={e=>setForm({...form,phone:e.target.value})}/>
        <input placeholder="PIN Code" required onChange={e=>setForm({...form,pin:e.target.value})}/>
        <input placeholder="City" required onChange={e=>setForm({...form,city:e.target.value})}/>
        <input placeholder="State" required onChange={e=>setForm({...form,state:e.target.value})}/>

        <button style={{padding:12,background:"#2e7d32",color:"#fff"}}>
          Continue to Payment
        </button>

      </form>

    </div>
  );
}