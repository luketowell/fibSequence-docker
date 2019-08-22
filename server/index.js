const keys = require('./keys');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Express app setup
const app = express();

app.use(cors());
app.use(bodyParser.json());

//PostGres setup
const { Pool } = require ('pg');
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
})

pgClient.on('error' => console.log('lost connection to postgres client'))

