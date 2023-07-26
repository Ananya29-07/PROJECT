import React from "react";

import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = props => {

  return (
   <ul className="task-list">
    {props.items.map( task => (
       <TaskItem 
         taskId = {task.taskId} 
         creator = {task.creator} 
         taskDesc = {task.taskDesc} 
         creatorId = {task.creatorId} 
        />
      ))}
   </ul>
  ); 
};

export default TaskList;