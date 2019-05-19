require('dotenv/config');
const express = require('express');
const app = express();

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

app.listen(process.env.HOST_PORT);