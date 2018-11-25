const fs=require('fs');
console.log("starting notes .js");

const fetchNotes=() =>{
    try{
        var notesString=fs.readFileSync('test-notes.json');
        return JSON.parse(notesString);
        
    }catch(e){
        console.log(e);
        return [];
    }
};

const saveNotes=(notes) => {
    
    fs.writeFileSync('test-notes.json',JSON.stringify(notes))
};

const addNote= (title,body) => {
//console.log(`adding note: ${title} => ${body}`)

var notes=[];
var note={
    title,
    body
};
notes=fetchNotes();
var duplicateNotes= notes.filter((note) =>  note.title === title); 
if(duplicateNotes.length != 0)
{
    console.log("Title already exsist");
    
}
else
{   
    notes.push(note);
    saveNotes(notes);
    return note;
}
};

const listNote=(title) => {
    console.log(`there is no  such note to list with title ${title}`);
};

const readNote=(title) => {
    console.log(`No reading material Found with this title name ${title}`);
};

const deleteNote=(title)=> {
    console.log(`note with ${title} deleted`);
}

module.exports = {
    addNote,
    deleteNote,
    listNote,
    readNote,
};