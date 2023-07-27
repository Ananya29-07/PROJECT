const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const taskRoutes = require('./routes/task-routes');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/tasks/',taskRoutes);

app.use((req, res, next) => {
    const error = new Error('Could not find this route', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    } 
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred'})
});

app.listen(5000);


