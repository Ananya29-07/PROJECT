import React, {useState, useEffect} from "react";

import TaskList from "../components/TaskList";

const CreatorTasks = () => {
    const [loadedTasks, setLoadedTask] = useState([]);
    const [changedTaskList, setChangedTaskList] = useState([]);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
   };

   useEffect(() => {
    console.log('Effect called');
    fetch(`http://localhost:5000/tasks`, requestOptions)
    .then(response => response.json())
    .then(result => setLoadedTask(result))
    .then(result => console.log(result))
    .catch(error => setLoadedTask([]));

    return(()=> {
        setChangedTaskList(false);
    })
   }, [changedTaskList])

   const handleChangeEvent = () => {
    console.log('Task Deleted');
    setChangedTaskList(true);
   }
  
    return (
        <React.Fragment>
          <div draggable>
           <TaskList items = {loadedTasks} onDeleteTask={ handleChangeEvent } />
          </div>
        </React.Fragment>
    );
}    

export default CreatorTasks;