import React from "react";

const Button = ({ id, type = "button", label, onClick, className }) => {
  return (
    <button id={id} type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
