'use strict';
require('dotenv').config();
const app = require('./lib/server.js');

const PORT = process.env.PORT;
app.listen(PORT, () => {console.log(`listening on port ${PORT}`)});