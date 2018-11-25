const _=require('lodash');
const fs=require('fs');
const yargs=require('yargs');

const notes=require('./notes.js')


const argv=yargs.argv;
const command=argv._[0];

console.log("Starting app.js");
console.log(argv);


if(command === 'add'){
    var note=notes.addNote(argv.title,argv.body);
    if(note)
    {
        console.log(`${note.title} added to the file`);
    }
    else{
        console.log('note title already exsist');
    }
}
else if(command === 'list'){
    //console.log("listing all notes");
    notes.listNote(argv.title);

}
else if(command === 'delete'){
    var note=notes.deleteNote(argv.title);
    if(note){
        console.log(`Note with title ${argv.title} deleted`);
    }
    else{
        console.log("No Note with that title found");
    }
}
else if(command === 'read'){
    //console.log('fetching single note ');
    notes.readNote(argv.title);
}
else{
    console.log("command not found");
}



console.log("finishing app");
