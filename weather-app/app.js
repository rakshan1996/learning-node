const request=require('request');
const yargs=require('yargs');

const argv=yargs
.options({
a :{
    demand: true,
    alias: 'address',
    describe:"address to fetch weather for",
    string: true
}
}).help().alias('help','h').argv;
console.log(argv.a);
const keys="yLFBAtZxOtgcZSgAw2Ae1SSAXPG1hQZD";
var latitude;
var longtitude;
const encodedAddress=encodeURIComponent(argv.a);
request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=yLFBAtZxOtgcZSgAw2Ae1SSAXPG1hQZD&location=${encodedAddress}`,
    json: true
},(error,response,body)=>{
    /* /* console.log(error);
    console.log(response); 
    console.log(JSON.stringify(body,undefined,4));
    console.log(`Address enterd: ${body.results[0].providedLocation.location}`) */ 
    if(error){
        console.log("Unable to connect to a google server");
    }
    else 
    {
        latitude=body.results[0].locations[0].latLng.lat;
        longtitude=body.results[0].locations[0].latLng.lng;
        
        console.log(`lattitude:${latitude} => longtitude:${longtitude}`);
    }
  
});