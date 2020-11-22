 

//------------------------
//    VARs
//-----------------------
const bodyParser = require('body-parser');  // serve per la post (è suplerfluo??)
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = new express();
const helmet = require('helmet');
const cors = require('cors');
const corsWhitelist = ['http://localhost']
const corsOptions = { origin: corsWhitelist };


const defaultRoutes = require('../routes/default');   
const logRoutes = require('../routes/logging');     
const apiComputerRoutes = require('../routes/apiComputer');     
const errorContoller = require('../controller/error');

//------------------------
//    MIDDLEWARE
//-----------------------
app.use(helmet());
app.use(new cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logRoutes);       
app.use(defaultRoutes);             
app.use(apiComputerRoutes);              
app.use(errorContoller.get404Page);    
apiComputerRoutes

//------------------------
//    MAIN
//-----------------------
app.listen(PORT, function () {
  console.log(`Server in funzione sulla porta ${PORT}!`);
});
