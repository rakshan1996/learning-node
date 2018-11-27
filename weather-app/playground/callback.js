var getUser = (id,callback) =>{
var user={
    id:21,
    name:'Devil'
};
setTimeout(()=>{
    callback(user);
},3000);

};

getUser(21,(user)=>{
    console.log(user.name);
});