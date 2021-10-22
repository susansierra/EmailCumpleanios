const {Sequelize} =require('sequelize');
require('dotenv');

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dialect: process.env.DB_DRIVER,
    host: process.env.DB_HOST,
});

sequelize.authenticate()
.then(()=>console.log('DB Connected'))
.catch(error => console.log(`DB unable to connect: ${error}`));

module.exports = sequelize;