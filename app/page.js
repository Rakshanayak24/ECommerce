"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import CartItem from "../components/CartItem";
import OrderSummary from "../components/OrderSummary";

export default function Home(){

  const router = useRouter();

  const [cart,setCart] = useState([]);
  const [selected,setSelected] = useState([]);
  const [shipping,setShipping] = useState(50);

  useEffect(()=>{

    const loggedIn = localStorage.getItem("loggedIn");

    if(!loggedIn){
      router.push("/auth/login");
      return;
    }

    fetch("/api/cart")
      .then(res=>res.json())
      .then(data=>{

        setCart(data.cartItems);
        setShipping(data.shipping_fee);

      });

  },[]);

  const handleSelect=(id,checked,qty,price)=>{

    let updated=[...selected];

    if(checked){

      updated=updated.filter(p=>p.id!==id);
      updated.push({id,qty,price});

    }else{

      updated=updated.filter(p=>p.id!==id);

    }

    setSelected(updated);

  };

  const handleDelete=(id)=>{

    setCart(cart.filter(item=>item.product_id!==id));

  };

  const subtotal = selected.reduce((acc,p)=>acc+p.qty*p.price,0);

  return(

    <div style={{display:"flex",gap:"40px"}}>

      <div style={{flex:2}}>

        {cart.map(item=>(

          <CartItem
            key={item.product_id}
            item={item}
            onSelect={handleSelect}
            onDelete={handleDelete}
          />

        ))}

      </div>

      <OrderSummary subtotal={subtotal} shipping={shipping}/>

    </div>

  );

}