const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
//app.use(express.json());
app.use('/', require('./routes'));


mongodb.initDb((err)=>{
  if(err){
    console.log("There is an error: "+ err);
  }else{
    app.listen(PORT, () => {
      console.log('Database conected and Web Server is listening at port ' + (PORT));
    });
  }
});
