//const MongoClient=require('mongodb').MongoClient;

const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log("connected to mongo Server");
    const db=client.db('TodoApp');
    
    //delete Many
       /*  db.collection('Users').deleteMany({
            location: 'New Delhi'
        }).then((result)=>{
            console.log(result);
    }); */
    
    //deleteOne

    db.collection('Users').deleteOne({
        _id: new ObjectID('5c0d03d519db7fd5ff7c5209')
    }).then((result)=>{
        console.log(result);
    })

    //findOneAndDelete

    /* db.collection('Users').findOneAndDelete({
        name: 'Devil'
    }).then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
    }); */


    client.close();
});