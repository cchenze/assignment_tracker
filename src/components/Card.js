import React, { useState } from "react";
import TaskEdit from "./TaskEdit";

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor: "#B14E53",
      secondaryColor: "#EACBC2",
    },
    {
      primaryColor: "#00552E",
      secondaryColor: "#d0f0c0",
    },
    {
      primaryColor: "#6F4E37",
      secondaryColor: "#EEEBDC",
    },
    {
      primaryColor: "#515B87",
      secondaryColor: "#C0D0EF",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const deleteHandler = () => {
    deleteTask(index);
  };

  return (
    <div class="card-wrapper mr-5">
      <div
        class="card-top"
        style={{ "background-color": colors[index % 4].primaryColor }}
      ></div>
      <div class="task-holder">
        <span
          class="card-header"
          style={{
            "background-color": colors[index % 4].secondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Detail}</p>

        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit me-3"
            style={{ color: colors[index % 4].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          ></i>
          <i
            class="fas fa-trash-alt"
            style={{ color: colors[index % 4].primaryColor, cursor: "pointer" }}
            onClick={deleteHandler}
          ></i>
        </div>
      </div>
      <TaskEdit
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </div>
  );
};

export default Card;
