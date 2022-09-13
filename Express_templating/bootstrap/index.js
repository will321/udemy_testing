const express= require('express');
const app= express();
const path = require('path');

app.use(express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/',(req , res)=>{
    res.render('home.ejs')
})

app.get('/cats',(req, res)=>{
    const cats = [
        'blue', 'rockets', 'monty','stephanie'
    ]
     res.render('cats', {cats})
})


app.get('/rand', (req,res)=>{
    const num = Math.floor(Math.random()*10) + 1;
    res.render('random', {bubbles: num})
} )

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})