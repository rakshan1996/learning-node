//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log("connected to mongo Server");
    const db=client.db('TodoApp');
    /* db.collection('Todos').find({
        _id: new ObjectID('5c0c1879ce6210103cd7f5ec')
    }).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));

    },(err)=>{
        console.log("unable to fetch docs");
    }); */
    
    db.collection('Users').find({
        name: 'Devil'
        }).toArray().then((docs)=>{
        //console.log(`Todos count: ${count}`);
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("unable to fetch docs");
    });
    client.close();
});