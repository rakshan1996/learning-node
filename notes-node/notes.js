console.log("starting notes .js");

const addNote= (title,body) => {
console.log(`adding note: ${title} => ${body}`)
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