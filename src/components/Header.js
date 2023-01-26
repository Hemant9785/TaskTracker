import React from "react";
import Button from "./Button";

const Header = () => {
  const addTask = () => {
    console.log("Add Task");
  };
  return (
    <header className="header">
      <h2>Task Tracker </h2>
      <Button text="Add" onClick={addTask} cname={"btn"} />
    </header>
  );
};

export default Header;
