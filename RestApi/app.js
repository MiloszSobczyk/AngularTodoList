const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 8080;
require('dotenv/config');

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Ustawia na dowolny źródło (uwaga na bezpieczeństwo w produkcji)
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors());

// Import Routes
const tasksRoute = require('./routes/tasks');
const usersRoute = require('./routes/users')

app.use('/tasks', tasksRoute);
app.use('/users', usersRoute);


mongoose.set("strictQuery", false);
mongoose
    .connect(process.env.MONGO_DB_ACCESS)
    .then(() => {
        console.log("connected to database");
    })
    .then(app.listen(PORT));