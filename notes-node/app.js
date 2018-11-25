const _=require('lodash');
const fs=require('fs');
const yargs=require('yargs');

const notes=require('./notes.js')

const command=process.argv[2];
const argv=yargs.argv;


/* console.log(_.isString(true));
console.log(_.isString('Rakshan == Devil'));
var filterArray=_.uniq(['Devil',1,2,1,2,'Devil']);
console.log(`this is Filtered Array:${filterArray}`);
 */

console.log("Starting app.js");
//console.log(`command:${command}`);
console.log(argv);


if(command === 'add'){
    //console.log("adding notes");
    notes.addNote(argv.title,argv.body);
    //notes.addNotes(argv.title,argv.body);
}
else if(command === 'list'){
    //console.log("listing all notes");
    notes.listNote(argv.title);

}
else if(command === 'delete'){
    //console.log("deleting note");
    notes.deleteNote(argv.title);
}
else if(command === 'read'){
    //console.log('fetching single note ');
    notes.readNote(argv.title);
}
else{
    console.log("command not found");
}
console.log("finishing app");
