export default function CheckoutSteps({ step }) {

  const steps = ["Cart","Shipping","Payment","Success"];

  return (
    <div style={{ display:"flex", marginBottom:30 }}>
      {steps.map((s,i)=>(
        <div key={s} style={{
          flex:1,
          textAlign:"center",
          borderBottom:i<=step?"3px solid green":"3px solid #ccc",
          padding:10
        }}>
          {s}
        </div>
      ))}
    </div>
  );
}