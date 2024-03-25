const express = require('express');
const app = express();
require('dotenv').config();
require('../dbConnection/dbConnection');
const { serverConfig } = require('../config/config');
const port = serverConfig.port || 8000;
const morgan = require('morgan');
const cors = require('cors');
const errorHandlerMiddleware = require('../middlewares/errorHandler');

//middlewares
app.use(morgan('dev'));
app.use(cors({}));
app.use(express.json());

//routes
const userRoutes = require('../routes/users.routes');
const login = require('../routes/login.routes');

//useRoutes
app.use('/users', userRoutes);
app.use('/login', login);

//middleware error handler
app.use(errorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Estamos escuchando el puerto ${port}`);
});
