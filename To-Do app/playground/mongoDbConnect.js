//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');

//object destructring
/* 
var user={name:'andrew',age:25};

var {name}=user;
console.log(name); */


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log("connected to mongo Server");
    const db=client.db('TodoApp');
     /* db.collection('Todos').insertOne({
        text:'Finish MongoDB part of node course ',
        completed:false,
        status:"OnGoing Hoping to complete it by today"

    },(err,result)=>{
        if(err){
            return console.log("unable to insert todo",err);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    }); */
 
        db.collection('Users').insertOne({
            name:"Devil",
            age:21,
            location:"Ludhiana"
        },(err,result)=>{
            if(err){
                return console.log("unable to add collection",err);
            }
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        });
        
    client.close();
});