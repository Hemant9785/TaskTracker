import React, { useState } from "react";

const AddForm = ({ submitHandler, Form, inputHandler, inputReminder }) => {
  //   console.log(Form);
  return (
    <form className="add-form form-control" onSubmit={(e) => submitHandler(e)}>
      <div>
        <label>Task</label>
        <input
          placeholder="Add Task"
          name="activity"
          value={Form.activity}
          onChange={inputHandler}
        />
      </div>
      <div>
        <label>Time</label>
        <input
          placeholder="Add Time"
          name="time"
          value={Form.time}
          onChange={inputHandler}
        />
      </div>
      <div className="form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          name="reminder"
          value={Form.reminder}
          onChange={inputReminder}
        />
      </div>
      <input type="submit" />
    </form>
  );
};

export default AddForm;
