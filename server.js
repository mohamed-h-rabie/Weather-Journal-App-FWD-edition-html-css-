const express = require('express');
const app = express();
let serverData ={}
app.use(express.static('frontend'));
app.use(express.json());


app.listen(3000,()=>{
    console.log("on port 3000");

})

app.post('/sendData',(req,res)=>{
serverData= req.body
console.log(serverData);
res.json({msg :'done'})
})
app.get('/all',(req,res)=>{
    res.json({msg:serverData})
})