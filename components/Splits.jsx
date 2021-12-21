import Image from "next/image";
import React from "react";

function Splits({ children, type, image }) {
  return (
    <div className={"splits " + type}>
      <aside className="side-one">
        <Image src={image} alt="split image" />
      </aside>
      <aside className="side-two">{children}</aside>
    </div>
  );
}

export default Splits;
