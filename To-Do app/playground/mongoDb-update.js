//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log("connected to mongo Server");
    const db=client.db('TodoApp');
    /* db.collection('Todos').findOneAndUpdate({
        completed: false
    },{
        $set:{
            text:"4 more to go to reach 100 commits",
            completed: "In progress"
        }
    },{
        returnOriginal:false
    }).then((result)=>{
        console.log(result);
    });

 */
    db.collection('Users').findOneAndUpdate({
        name :"Devil"
    },{
        $set:{
            name:"Satan"
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:true
    }).then((result)=>{
        console.log(result);
    });



    client.close();
});