const express = require("express");
const app = express();
// app.use((req, res) => {
//     console.log("we got a new request")
//     // res.send("Hello we got your request! This is a response")
//     res.send({ color: 'red' })
// })

app.get('/', (req,res)=>{
    res.send('Welcome to the home page!!')
})

app.post('/cats',(req,res)=>{
    res.send('Post request to cats')
})

app.get('/cats', (req,res)=>{
    res.send('Mewo!!')
})

app.get('/dogs', (req,res)=>{
    res.send('Woof!!')
})


app.listen(3000, () => {
    console.log("Listening on port 3000!")
})




