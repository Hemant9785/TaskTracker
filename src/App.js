import "./App.css";
import Styles from "./CssModule.module.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddForm from "./components/AddForm";
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
function App() {
  const [tasks_, setTasks_] = useState(tasks);
  const [Form, setForm] = useState({
    activity: "",
    time: "",
    reminder: false,
  });
  const [showAdd, setShowAdd] = useState(false);

  const addClick = () => {
    setShowAdd((padd) => {
      return !padd;
    });
  };
  const onTaskClick = (id) => {
    console.log("dlt");
    let newarr = [];
    tasks_.forEach((element) => {
      if (element.id !== id) newarr.push(element);
    });
    setTasks_((p) => {
      return newarr;
    });
  };
  const setRimnder = (id) => {
    console.log("remin");
    setTasks_(
      tasks_.map((task) => {
        return task.id === id ? { ...task, reminder: !task.reminder } : task;
      })
    );
    // console.log("tasks :", tasks_);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000) + 1;
    setTasks_([
      ...tasks_,
      {
        ...Form,
        id,
      },
    ]);
    setForm({
      activity: "",
      time: "",
      reminder: false,
    });
  };

  const inputHandler = (e) => {
    setForm((pForm) => {
      return {
        ...pForm,
        [e.target.name]: e.target.value,
      };
    });
  };
  const inputReminder = (e) => {
    setForm((pForm) => {
      return { ...pForm, reminder: !pForm.reminder };
    });
  };
  return (
    <div className="container">
      <Header addClick={addClick} />
      {showAdd ? (
        <AddForm
          submitHandler={submitHandler}
          inputHandler={inputHandler}
          inputReminder={inputReminder}
          Form={Form}
        />
      ) : (
        ""
      )}
      <Tasks tasks={tasks_} setRimnder={setRimnder} onTaskClick={onTaskClick} />
    </div>
  );
}

export default App;
