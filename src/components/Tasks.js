import React, { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, setRimnder, onTaskClick }) => {
  //   console.log(tasks_);

  return (
    <div>
      {tasks.map((task) => {
        return (
          <Task
            setRimnder={() => setRimnder(task.id)}
            onTasksClick={() => onTaskClick(task.id)}
            key={task.id}
            task={task}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
