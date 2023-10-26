import React from "react";
export default function Hero() {
  const hero=18;
  return (
    <>
    <p className="hero">This is ostad hero</p>
{
  (()=>{   //short hand if else which is IIFE
    if(hero>=18){
      alert('you are able to vote')

    }else{
      alert('you are not able to vote')
    }
  })()
}   
    </>
  );
}
