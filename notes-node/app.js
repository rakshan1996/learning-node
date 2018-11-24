console.log("Starting app.js");
const _=require('lodash');

console.log(_.isString(true));
console.log(_.isString('Rakshan == Devil'));
var filterArray=_.uniq(['Devil',1,2,1,2,'Devil']);
console.log(`this is Filtered Array:${filterArray}`);

console.log("finishing app");
