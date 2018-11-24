/* var obj={
    name:'Devil'
};
/* 
var stringObj=JSON.stringify(obj);
console.log(typeof(obj));
console.log(typeof(stringObj));
console.log(stringObj); */
/* 
var personString='{"name":"Devil","age":22}';
var person=JSON.parse(personString);
console.log(typeof(personString));
console.log(typeof(person));
console.log(`${person.name},${person.age} `); */ 

const fs=require('fs');

var orgNote={
    title:'Devil',
    body:'Welcome to Hell'
};

var orgNoteString=JSON.stringify(orgNote);
fs.writeFileSync("test.json",orgNoteString);

var noteString=fs.readFileSync('test.json');
var objJson=JSON.parse(noteString);
console.log(objJson.title);