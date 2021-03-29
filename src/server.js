const express = require('express');
const routes = require('./routes');
var cors = require('cors')

// App Definiton
const app = express();


const server = require('http').createServer(app);

// App configurations
app.use(express.json());
app.use(cors())
app.options('*', cors());
app.use(routes);


// App port configuration
server.listen(process.env.PORT || 3333);