const _=require('lodash');
const command=process.argv[2];


/* console.log(_.isString(true));
console.log(_.isString('Rakshan == Devil'));
var filterArray=_.uniq(['Devil',1,2,1,2,'Devil']);
console.log(`this is Filtered Array:${filterArray}`);
 */

console.log("Starting app.js");
console.log(`command:${command}`);
console.log(process.argv);

if(command === 'add'){
    console.log("adding notes");
}
else if(command === 'list'){
    console.log("listing all notes");

}
else if(command === 'delete'){
    console.log("deleting note");
}
else if(command === 'read'){
    console.log('fetching single note ');
}
else{
    console.log("command not found");
}
console.log("finishing app");
