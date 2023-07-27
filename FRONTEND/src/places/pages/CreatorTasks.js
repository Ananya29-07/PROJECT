import React from "react";

import { useParams } from "react-router-dom";
import TaskList from "../components/TaskList";

const DUMMY_TASKS = [
    {
        taskId : 't1',
        creator : 'Ananya Gupta',
        taskDesc : 'Study JavaScript',
        creatorId: 'c1'
    },
    {
        taskId : 't1',
        creator : 'Ananya Gupta',
        taskDesc : 'Study Node.js',
        creatorId: 'c1'
    },
    {
        taskId : 't2',
        creator : 'Dr. Mishra',
        taskDesc : 'Travel whole world',
        creatorId: 'c2'
    }
];

const CreatorTasks = () => {
    const taskId = useParams().taskId;
    const loadedTasks = DUMMY_TASKS.filter(tasks => tasks.taskId === taskId);
    return (
        <React.Fragment>
          <div draggable>
           <TaskList items = {CreatorTasks} />
          </div>
        </React.Fragment>
    );
}    

export default CreatorTasks;