import React from "react";

export default function Project() {
    const city=['kolkata','Dhaka','Murshidabad','Rajshahi']
  return (
    <div className="project">
      
        
        {
            city.map((item,i)=>{
        return<li key={i.toString()}>{item}</li>
            })
        }
      
    </div>
  );
}
