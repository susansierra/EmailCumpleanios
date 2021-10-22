const express = require('express');
const app = express();

require('dotenv').config();
const settings = require('./settings/settings');

const PORT = process.env.PORT || 3002;

app.use(settings);

app.listen(PORT, ()=>{
    console.log(`Server running on port: ${PORT}`);
});