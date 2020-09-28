const express = require('express');
const hbs  = require('express-handlebars');
const router = require('./routes/index');
const app = express();
const path = require('path');


app.use('/', router);
const PORT = process.env.PORT || 3000;
// app.listen(
//     3000,
//     () => {
//         console.log("Listening to port 3000")
//     }
// );
app.listen(
    PORT,
    () => {
      console.log(`Listening to port ${PORT}`);
    }
  );
  
//Template engine setting
app.engine('hbs',hbs({extname:'hbs'}));
app.set('view engine', 'hbs');

//middleware
app.use(express.static(path.join(__dirname,'public')));


