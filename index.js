const express = require('express');


//set up express app
const app = express(); 


app.get('/api', (req, res) => {
  console.log('GET Request');
   res.send({name: 'sai'});
});

//listen for requests 
app.listen(process.env.port || 4000, () => {
    console.log('now listening for your requests');
});
