const express = require('express');
const app = express();
const morgan = require('morgan');


app.use(morgan('tiny'))


app.get('/', (req,res)=>{
    res.send('home page!')
})


app.get('/dogs', (req,res)=>{
    res.send('Woof wooff')
})

app.listen(3000,()=>{
    console.log('App is running on localhost:3000')
})