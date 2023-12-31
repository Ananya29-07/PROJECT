import React from "react";

import CreatorTaskItem from "./CreatorTaskItem";
import Card from "../../shared/components/UIElements/Card";
import './TasksList.css';

const TasksList = props => {
    if(props.items.length === 0) {
        return (
            <div className="center">
                <Card>
                   <h2>No Tasks Found</h2>
                </Card>
            </div>
        );
    }

    return (
        <ul className="tasks-list">
            {props.items.map(taskUser => (
                <CreatorTaskItem 
                  key = {taskUser.taskId}
                  taskId = {taskUser.taskId} 
                  creator = {taskUser.creator} 
                  taskDesc = {taskUser.taskDesc} 
                />
            ))}
        </ul>
    );
};

export default TasksList;