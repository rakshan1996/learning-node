const request=require('request');
const yargs=require('yargs');


const geoCode=require('./geoCode/geoCode.js');
const weather=require('./geoCode/weatherInfo.js');

const argv=yargs
.options({
a :{
    demand: true,
    alias: 'address',
    describe:"address to fetch weather for",
    string: true
}
}).help().alias('help','h').argv;

geoCode.geoCoding(argv.a,(passLocation)=>{
    weather.weatherInfo(passLocation,(tempra)=>{
        console.log(`Temprature is ${tempra} degree celcius`)
    });
    
});




