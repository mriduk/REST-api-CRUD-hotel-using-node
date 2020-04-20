const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
const morgan=require('morgan');
const path=require('path');

const app=express();
const db=require('./config/db').database;

mongoose.connect(db,{useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log('DATABASE CONNECTED SUCESSFULLY')
})
.catch((err)=>{
    console.log('UNABLE TO CONNECT TO THE DATABASE',err)
});

const port=process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const postroutes=require('./routes/apis/post');
app.use('/api/hotel',postroutes);
/*
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'public/index.html'))

});*/
app.get('/',(req,res)=>{
    res.send('<h1>TEST 1</h1>')
});

app.listen(port,()=>{
    console.log('SERVER STARTED ON PORT',port)
});