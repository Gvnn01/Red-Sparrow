const mongoose = require('mongoose');
/*const config = require('config');
const db = config.get('mongoURI');*/
//Desconsiderar a importação de dotenv e a variavel const db = process.env.MONGORUI e utilizar as linhas comentadas, caso use as variaveis passadas via default.json
require("dotenv").config()
const db = process.env.MONGOURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true
    });

    console.log('MongoDB Connected...');
  } catch {
    console.log(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;