import React from "react";

import TasksList from "../components/TasksList";

const HomePageTask = () => {
    const TASKS = [
        {
          creator : 'Ananya Gupta', 
          taskDesc : [],
          creatorId: 'c1'                
       }
   ];
    return <TasksList items = {TASKS} />  
};

export default HomePageTask;