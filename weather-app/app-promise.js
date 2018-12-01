const request=require('request');
const yargs=require('yargs');
const axios=require('axios');
const keys=require('./geoCode/keys');


const argv=yargs
.options({
a :{
    demand: true,
    alias: 'address',
    describe:"address to fetch weather for",
    string: true
}
}).help().alias('help','h').argv;

const encodedAddress=encodeURIComponent(argv.address);    

var geocodeUrl=`http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapKey}&location=${encodedAddress}`


axios.get(geocodeUrl).then((response)=>
{
    var location=`${response.data.results[0].locations[0].latLng.lat},${response.data.results[0].locations[0].latLng.lng}`
    var weatherUrl=`https://api.darksky.net/forecast/${keys.weatherKey}/${location}`;
    return axios.get(weatherUrl);
}).then((response)=>{
    var tempFaranhite=response.data.currently.temperature;
    var tempCelicius=(parseFloat(tempFaranhite)-32)*(5/9);
    console.log(`Temprature is ${tempCelicius}`);
}).catch((e)=>{
    console.log(e); 
})