import React, { useState } from "react";
import Task from "./Task";
const tasks = [
  {
    id: 1,
    activity: "111nothinfsdaf dsaf",
    time: "dsjafklsjdalfk",
    reminder: false,
  },
  {
    id: 2,
    activity: "22nothinfsdaf dsaf",
    time: "dsjafklsjdalfk",
    reminder: false,
  },
  {
    id: 3,
    activity: "33nothinfsdaf dsaf",
    time: "dsjafklsjdalfk",
    reminder: false,
  },
  {
    id: 4,
    activity: "44nothinfsdaf dsaf",
    time: "dsjafklsjdalfk",
    reminder: false,
  },
];
const Tasks = () => {
  const [tasks_, setTasks_] = useState(tasks);

  const onTaskClick = (id) => {
    let newarr = [];
    tasks_.forEach((element) => {
      if (element.id !== id) newarr.push(element);
    });
    setTasks_((p) => {
      return newarr;
    });
  };
  const setRimnder = (id) => {
    setTasks_(
      tasks_.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
    // console.log("tasks :", tasks_);
  };
  //   console.log(tasks_);

  return (
    <div>
      {tasks_.map((task) => {
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
