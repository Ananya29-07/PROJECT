let DUMMY_TASKS = [
     
];

const getAllTasks = (req, res) => {
    return res.json(DUMMY_TASKS); 
};

const createTask = (req, res, next) => {
    const { taskId, creator, taskDesc } = req.body;
    const createdTask = {
        taskId,
        creator,
        taskDesc
    };
    DUMMY_TASKS.push(createdTask);
    
    res.status(201).json({DUMMY_TASKS: createdTask});
};

const updateTaskByTaskId = (req, res, next) => {
    const { creator, taskDesc } = req.body;
    const taskId = req.params.taskId;
    
    const updatedTask = {...DUMMY_TASKS.find(t => t.taskId === taskId)};
    const taskIndex = DUMMY_TASKS.findIndex(t => t.taskId === taskId);
    updatedTask.creator = creator;
    updatedTask.taskDesc = taskDesc;

    DUMMY_TASKS[taskIndex] = updatedTask;

    res.status(200).json({DUMMY_TASKS: updatedTask});
}; 

const deleteTaskByTaskId = (req, res, next) => {
    const { taskId } = req.params;
    console.log(taskId);
    const taskIndex = DUMMY_TASKS.findIndex(t => t.taskId === taskId);
    let TASK = [...DUMMY_TASKS];
    DUMMY_TASKS = TASK.splice(taskId, taskIndex)
    console.log(TASK)
    if(TASK) {
        console.log(...DUMMY_TASKS);
        res.status(200).json({message: 'Deleted task'});
    } else {
        throw new Error('Could not find a task for that Task Id', 404);
    }
};

exports.getAllTasks = getAllTasks;
exports.createTask = createTask;
exports.updateTaskByTaskId = updateTaskByTaskId;
exports.deleteTaskByTaskId = deleteTaskByTaskId;