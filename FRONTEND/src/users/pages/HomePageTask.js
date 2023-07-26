import React from "react";

import TasksList from "../components/TasksList";

const AllTasks = () => {
    const TASKS = [
        {
          taskId : 't1', 
          creator : 'Ananya Gupta', 
          taskDesc : [],
          creatorId: 'c1'                
       }
   ];
    return <TasksList items = {TASKS} />  
};

export default AllTasks;