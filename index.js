const express = require('express');


//set up express app
const app = express(); 
port = process.env.PORT || 4000;


//Initialize Routes
app.use('/api', require('./routes/api'));

//listen for requests 
app.listen(port);
console.log('now listening for your requests');

