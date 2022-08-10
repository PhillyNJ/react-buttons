import React from "react";

const Button = (props) => {
  return (
    <button className="btn btn-success " onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;
