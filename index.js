require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// crear el servidor de express
const app = express();

// base de datos
dbConnection();

// cors
app.use(cors());

// public directory
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Listening requests
app.listen(process.env.PORT, () => {
    console.log('server running in port 4000');
});
