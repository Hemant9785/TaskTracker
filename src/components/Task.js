import React from "react";
import { FaTimes } from "react-icons/fa";

// const tdum = {
//   id: 1,
//   activity: "nothinfsdaf dsaf",
//   time: "dsjafklsjdalfk",
//   reminder: true,
// };
const Task = ({ task, onTasksClick, setRimnder }) => {
  const { id, activity, time, reminder } = task;

  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={setRimnder}
    >
      <h3>
        {activity}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={onTasksClick}
        />
      </h3>
      <p>{time}</p>
    </div>
  );
};

export default Task;
