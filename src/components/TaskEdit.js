import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TaskEdit = ({ modal, toggle, updateTask, taskObj }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [detail, setDetail] = useState("");

  const changeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "course") {
      setCourseTitle(value);
    } else {
      setDetail(value);
    }
  };

  useEffect(() => {
    setCourseTitle(taskObj.Name);
    setDetail(taskObj.Detail);
  }, []);

  const updateHandler = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = courseTitle;
    tempObj["Detail"] = detail;
    updateTask(tempObj);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Assignment</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Course Title</label>
              <input
                type="text"
                className="form-control"
                value={courseTitle}
                onChange={changeHandler}
                name="course"
              />
            </div>
            <br></br>
            <div className="form-group">
              <label>Assignment Detail</label>
              <textarea
                rows="3"
                className="form-control"
                value={detail}
                onChange={changeHandler}
                name="detail"
              ></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={updateHandler}>
            Update
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TaskEdit;
