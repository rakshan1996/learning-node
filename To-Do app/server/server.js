const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model('Todo',{
    text:{
        type: String,
        required:true,
        minlength: 1,
        trim: true
    },
    completed:{
        type:Boolean,
        default: false
    },
    completedAt:{
        type:Number,
        default:null
    }
});

var newTodo=new Todo({
    text:'Reach 100 Contributions'
});


newTodo.save().then((doc)=>{
    console.log(`Todo Saved:${doc}`)
},(e)=>{
    console.log("unable to save todo");
});