const express= require('express');
const app= express();
const path = require('path');

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))

const comments =[
    {
        username: 'Todd',
        comment:'that is so funny'
    },
    {
        username: 'Skyler',
        comment:'I like to go birdwatching with my dog'
    },
    {
        username: 'Sk8erBoi',
        comment:'Pls delte your account,Todd'
    },
    {
        username: 'onlysaywoff',
        comment:'woof woof woof'
    }

]

app.get('/comments',(req,res)=>{
    res.render('comments/index', {comments})
})

app.get('/comments/new',(req,res)=>{
    res.render('comments/new', {comments})
})
app.post('/comments',(req,res)=>{
    const {username, comment} = req.body;
    comments.push({username, comment})
    res.redirect('/comments')
})


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