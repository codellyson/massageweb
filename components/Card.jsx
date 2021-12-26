import React from "react";
import PropTypes from "prop-types";

function Card({ children, type, ...rest }) {
  return (
    <article className={"card " + type} {...rest}>
      {children}
    </article>
  );
}

Card.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
};
export default Card;
