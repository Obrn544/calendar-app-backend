const express = require('express');
require('dotenv').config();

const app = express();

// public directory
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

// Listening requests
app.listen(process.env.PORT, () => {
    console.log('server running in port 4000');
});
