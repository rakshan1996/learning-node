const MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
       return console.log('unable to connect to mongoDB server');
    }
    console.log("connected to mongo Server");
    const db=client.db('TodoApp');
   /*  db.collection('Todos').insertOne({
        text:'something to DO',
        completed:false

    },(err,result)=>{
        if(err){
            return console.log("unable to insert todo",err);
        }

        console.log(JSON.stringify(result.ops,undefined,2));
    });
 */
        db.collection('Users').insertOne({
            name:"Devil",
            age:22,
            location:"New Delhi"
        },(err,result)=>{
            if(err){
                return console.log("unable to add collection",err);
            }
            console.log(JSON.stringify(result.ops,undefined,2));
        });

    client.close();
});