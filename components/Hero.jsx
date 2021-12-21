import React from "react";
import Navbar from "./Navbar";

function Hero({ children }) {
  return (
    <header className="mast-head">
      <Navbar />
      <div className="mast-content">{children}</div>
    </header>
  );
}

export default Hero;
