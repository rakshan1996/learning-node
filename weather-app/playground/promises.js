var somePromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
    //resolve('Hey ,It worked');
    reject('unable to fulfil promise');
    },2500);
});

somePromise.then((message) => {
console.log('success',message);
},(errorMessage)=>{
    console.log(`errorMessage:${errorMessage}`);
});