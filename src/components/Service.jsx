import React from "react";

export default function Service() {
    const status=true;
  return (
    <div className="services">
      <p >we provide all services about world soft e-commerce</p>
      {status?<button className="btn">YES</button>:<button>NO</button>}
    </div>
  );
}
