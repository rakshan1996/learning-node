const express=require('express');

var app=express();

app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
//res.send('<h1>Hello World Devil this side</h1>');
res.send({
    name:'Devil',
    likes:[
        'Food',
        'Hiking'
    ]
})
});
app.get('/about',(req,res)=>{
res.send("Hi i am Devil and i am 6 ft 2");
});

app.listen(3000,()=>{
    console.log("server is running at port 3000");
});
