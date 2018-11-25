const _=require('lodash');
const fs=require('fs');
const yargs=require('yargs');

const notes=require('./notes.js')


const argv=yargs.command('add','add a new note',{
    title:{
        describe: 'Title of Note',
        demand:true,
        alias: 't'
    },
    body:{
        describe: 'body of Note',
        demand: true,
        alias: 'b'
    }

}).help().argv;
const command=argv._[0];

console.log("Starting app.js");
//console.log(argv);


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
    var allNotes=notes.listNote();
    
    console.log(`Printing all ${allNotes.length} note(s)`);      
    allNotes.forEach( (note) => {
        console.log(`${note.title} => ${note.body}`);
    });
    

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
    var note=notes.readNote(argv.title);
    if(note)
    {
        console.log(`here are the matching Notes:${note.title } : ${note.body}`);
    }
    else{
        console.log(`No notes with that title: ${argv.title} found`);
    }
    
}
else{
    console.log("command not found");
}



console.log("finishing app");
