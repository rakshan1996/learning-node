const express=require('express');

var app=express();
app.get('/',(req,res)=>{
res.send('<h1>Hello World Devil this side</h1>');
});

app.listen(3000);
