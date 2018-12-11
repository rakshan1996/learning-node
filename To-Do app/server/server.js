const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model('Todo',{
    text:{
        type: String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

var newTodo=new Todo({
    text:'Eat Lunch',
    completed:false,
    completedAt:234
});


newTodo.save().then((doc)=>{
    console.log(`Todo Saved:${doc}`)
},(e)=>{
    console.log("unable to save todo");
});