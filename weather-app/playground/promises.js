
var asyncAdd = (a,b) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a === 'number' && typeof b === 'number'){
                resolve(a + b);
            }
            else{
                reject('the no must be no');
            }
        },1500);
    })
}

asyncAdd(5,'2').then((res)=>{
    console.log(res);
    return asyncAdd(res,12);

}).then((res)=>{
    console.log(res);
}).catch((errorMessage)=>{
    console.log('arguments must be number');
});

/* 
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
}); */