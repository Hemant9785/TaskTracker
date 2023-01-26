import React from "react";
import Button from "./Button";

const Header = ({ addClick }) => {
  return (
    <header className="header">
      <h2>Task Tracker </h2>
      <Button text="Add" onClick={addClick} cname={"btn"} />
    </header>
  );
};

export default Header;
