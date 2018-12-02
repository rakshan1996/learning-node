const express=require('express');
const hbs=require('hbs');

var app=express();
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
//res.send('<h1>Hello World Devil this side</h1>');
/* res.send({
    name:'Devil',
    likes:[
        'Food',
        'Hiking'
    ]
}) */

res.render('home.hbs',{
    Title:"Devil's Pc",
    authorsName:"satan",
    welcomeMessage:"This is the Entry to Hell Gate Proceed with caution",
    Copyright: new Date().getUTCDate()
})
});
app.get('/about',(req,res)=>{
res.render('about.hbs',{
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear()
});
});

app.listen(3000,()=>{
    console.log("server is running at port 3000");
});
