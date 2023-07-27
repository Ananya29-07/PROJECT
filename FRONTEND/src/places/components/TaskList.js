import React from "react";

import TaskItem from './TaskItem';
import './TaskList.css';

const TaskList = props => {
  console.log(props);
  return (
   <ul className="task-list">
    {props.items.map( task => (
       <TaskItem onDeleteTask={props.onDeleteTask} key={task.taskId} 
         taskId = {task.taskId} 
         creator = {task.creator} 
         taskDesc = {task.taskDesc} 
        />
      ))}
   </ul>
  ); 
};

export default TaskList;