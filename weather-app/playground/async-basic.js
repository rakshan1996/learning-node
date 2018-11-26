console.log("statrting app");
setTimeout(()=>{
console.log("inside of callback ");
},2000);

console.log("finishing app");
  
setTimeout(()=>{
    console.log("secon timeout");
},0000);
