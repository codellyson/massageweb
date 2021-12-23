import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

function SnapTop() {
  const [snap, setSnap] = useState(false);
  const handleToggleSnap = (e) => {
    window.scrollY >= 779 ? setSnap(!snap) : setSnap(false);
  };
  const handleSnap = () => {
    const rootElement = document.documentElement;
    rootElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleToggleSnap);
    return () => {
      window.removeEventListener("scroll", handleToggleSnap);
    };
  }, []);

  return (
    <div className={`snaptop ${!snap ? "hide" : ""}`} onClick={handleSnap}>
      <FaChevronUp />
    </div>
  );
}

export default SnapTop;
