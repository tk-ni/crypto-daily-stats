require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const favicon = require('serve-favicon');
const cors = require('cors');

//Serve static Vue
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

//Middleware
app.use(cors());
app.use(express.json({ limit: '5000kb', extended: true }));
app.use(express.urlencoded({ limit: '5000kb', extended: true }));

//Redirect all requests to dist's index.html
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

app.listen(process.env.PORT, ()=>{
    console.log('Crypto Daily Stats Server listening on', process.env.PORT)
})