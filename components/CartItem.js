"use client";

import { useState } from "react";

export default function CartItem({item,onSelect,onDelete}){

  const [qty,setQty]=useState(item.quantity);
  const [checked,setChecked]=useState(false);

  const increase=()=>{

    const newQty=qty+1;
    setQty(newQty);

    onSelect(item.product_id,checked,newQty,item.product_price);

  };

  const decrease=()=>{

    if(qty>1){

      const newQty=qty-1;
      setQty(newQty);

      onSelect(item.product_id,checked,newQty,item.product_price);

    }

  };

  const handleCheck=(e)=>{

    setChecked(e.target.checked);

    onSelect(item.product_id,e.target.checked,qty,item.product_price);

  };

  return(

    <div style={{border:"1px solid #ddd",padding:"15px",marginBottom:"10px"}}>

      <input type="checkbox" onChange={handleCheck}/>

      <img src={item.image} width="80"/>

      <h4>{item.product_name}</h4>

      <p>₹{item.product_price}</p>

      <button onClick={decrease}>-</button>

      {qty}

      <button onClick={increase}>+</button>

      <button
        onClick={()=>onDelete(item.product_id)}
        style={{marginLeft:"20px",background:"red",color:"white"}}
      >
        Delete
      </button>

    </div>

  );

}