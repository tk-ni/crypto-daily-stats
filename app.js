//Dependencies
require('dotenv').config();
const express = require('express');
const app = express();

const path = require('path');
const favicon = require('serve-favicon');
const cors = require('cors');

//Dependencies - routes
const coingeckoRoute = require('./routes/coingecko.route');

//Serve static Vue
app.use(express.static('dist'));
app.use(favicon(path.join(__dirname, 'dist', 'favicon.ico')));

//Middleware
app.use(cors());
app.use(express.json({ limit: '5000kb', extended: true }));
app.use(express.urlencoded({ limit: '5000kb', extended: true }));

//Routes
app.use('/api/coingecko', coingeckoRoute);

//Redirect all requests to dist's index.html
app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, './dist/index.html'))
})

//Listen
app.listen(process.env.PORT, ()=>{
    console.log('Crypto Daily Stats Server listening on', process.env.PORT)
})