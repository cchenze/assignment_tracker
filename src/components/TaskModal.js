import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const TaskModal = ({ modal, toggle, save }) => {
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

  const saveHandler = () => {
    let taskObj = {};
    taskObj["Name"] = courseTitle;
    taskObj["Detail"] = detail;
    save(taskObj);
  };

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add Assignment</ModalHeader>
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
          <Button color="primary" onClick={saveHandler}>
            Create
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TaskModal;
