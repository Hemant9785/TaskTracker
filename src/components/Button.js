import React from "react";

const Button = ({ text, onClick, cname }) => {
  return (
    <button onClick={onClick} className={cname}>
      {text}
    </button>
  );
};
Button.defaultProps = {
  text: "btn",
  onClick: () => {
    return "";
  },
  cname: "",
};

export default Button;
