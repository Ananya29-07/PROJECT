const { validationResult } = require('express-validator');
const HttpError = require('../models/http-error');

let DUMMY_TASKS = [
    {
        taskId : 't1',
        creator : 'Ananya Gupta',
        taskDesc : 'Study JavaScript',
        creatorId: 'c1'
    },
    {
        taskId : 't2',
        creator : 'Ananya Gupta',
        taskDesc : 'Study Node.js',
        creatorId: 'c1'
    },
];

const getTaskByTaskId = (req, res, next) => {
    const taskId = req.params.taskId;
    const tasks = DUMMY_TASKS.filter(t => {
        return t.taskId === taskId;
    });
    if (!tasks || tasks.length === 0) {
        return next(new HttpError('Could not find tasks for provided task id', 404));
    } 

    res.json({tasks});
};

const createTask = (req, res, next) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('Invalid inputs passed, please check your data', 422);
    }

    const { creator, taskDesc } = req.body;
    const createdTask = {
        creator,
        taskDesc
    };

    DUMMY_TASKS.push(createdTask);
    console.log(res.json());
    
    res.status(201).json({task: createdTask});
};

const updateTaskByTaskId = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        console.log(errors);
        throw new HttpError('Invalid inputs passed, please check your data', 422);
    }

    const { creator, taskDesc } = req.body;
    const taskId = req.params.taskId;

    const updatedTask = {...DUMMY_TASKS.find(t => t.id === taskId)};
    const taskIndex = DUMMY_TASKS.findIndex(t => t.id === taskId);
    updatedTask.creator = creator;
    updatedTask.taskDesc = taskDesc;

    DUMMY_TASKS[taskIndex] = updatedTask;

    res.status(200).json({task: updatedTask});
}; 

const deleteTaskByTaskId = (req, res, next) => {
    const taskId = req.params.taskId;
    if(!DUMMY_TASKS.find(t => t.taskId === taskId)) {
        throw new HttpError('Could not find a task for that Task Id', 404);
    }
    DUMMY_TASKS = DUMMY_TASKS.filter(t => t.taskId !== taskId );
    res.status(200).json({message: 'Deleted task'});
};

exports.getTaskByTaskId = getTaskByTaskId;
exports.createTask = createTask;
exports.updateTaskByTaskId = updateTaskByTaskId;
exports.deleteTaskByTaskId = deleteTaskByTaskId;