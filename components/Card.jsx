import React from "react";
import PropTypes from "prop-types";
function Card({ children, type }) {
  return <article className={"card " + type}>{children}</article>;
}

Card.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};
export default Card;
