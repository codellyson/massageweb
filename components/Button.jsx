import React from "react";

function Button({ children, type }) {
  return <button className={"btn " + type}>{children}</button>;
}

export default Button;
