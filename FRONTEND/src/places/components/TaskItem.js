import React, { useState } from "react";

import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import './TaskItem.css';

const TaskItem = props => {
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const showDeleteWarningHandler = () => {
      setShowConfirmModal(true);
    };

    const cancelDeleteHandler = () => {
      setShowConfirmModal(false);
    }

    const confirmDeleteHandler = () => {
      setShowConfirmModal(false);
      console.log("DELETING.....")
    }

    return (
      <React.Fragment>
        <Modal
          show={showConfirmModal}
          onCancel={cancelDeleteHandler}
          header="Are You Sure?" 
          footerClass="task-item__modal-actions" 
          footer={
          <React.Fragment>
            <Button inverse onClick={cancelDeleteHandler}>
              CANCEL
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              DELETE
            </Button>
          </React.Fragment>
        }> 
          <p>Do you wish to proceed and delete this task? Please note that it cannot be undone thereafter</p>
        </Modal>  
        <li className="task-item">
         <Card className = "task-item__content">
          <div className="task-item__info">
            <h3>{props.creator}</h3>
            <p>{props.taskDesc}</p>
          </div>
          <div className="task-item__actions">
            <Button inverse to = {`/tasks/update/${props.taskId}`}>
              UPDATE
            </Button>
           <Button danger onClick={showDeleteWarningHandler}>
              DELETE
            </Button>
          </div>
         </Card>
        </li>
      </React.Fragment>  
    );  
};

export default TaskItem;