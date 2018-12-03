const express=require('express');
const hbs=require('hbs');

var app=express();
hbs.registerPartials(__dirname+'/views/partials');
hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});
hbs.registerHelper('ScreamIt',(text)=>{
    return text.toUpperCase();
});
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
    //Copyright: new Date()
})
});
app.get('/about',(req,res)=>{
res.render('about.hbs',{
    authorsName: 'About Page',
    //Copyright: new Date().getFullYear()
});
});

app.listen(3000,()=>{
    console.log("server is running at port 3000");
});