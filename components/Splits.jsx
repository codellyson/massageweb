import Image from "next/image";
import React from "react";

function Splits({ children, type, image }) {
  return (
    <div className={"splits " + type}>
      <aside className="side-one" data-aos="slide-up">
        <Image src={image} alt="split image" />
      </aside>
      <aside className="side-two" data-aos="slide-up">
        {children}
      </aside>
    </div>
  );
}

export default Splits;
