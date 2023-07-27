const express = require('express');
const { check } = require('express-validator');

const taskControllers = require('../controllers/task-controller');

const router = express.Router();

router.get('/', taskControllers.getAllTasks);

router.post(
    '/', 
    [
        check('creator')
          .not()
          .isEmpty(),
        check('taskDesc').isLength({min: 5}), 
    ], 
    taskControllers.createTask
);

router.patch(
    '/:taskId/:creator/:taskDesc',
    [
        check('creator')
          .not()
          .isEmpty(),
        check('taskDesc').isLength({min: 5}) 
    ],
    taskControllers.updateTaskByTaskId
);

router.delete('/:taskId', taskControllers.deleteTaskByTaskId);

module.exports = router;