const mongoose = require('mongoose');
const { serverConfig } = require('../config/config');

const dbConn = async () => {
  try {
    await mongoose.connect(serverConfig.CONNECTION_STRING);
    console.log('Conexion exitosa');
  } catch (error) {
    console.log(error);
  }
};

dbConn();
