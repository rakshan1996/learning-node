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

geoCode.geoCoding(argv.a).then((passlocation)=>{
    weather.weatherInfo(passlocation).then((temp)=>{
        console.log(`Temprature is ${temp} degree celcius`);
    })
}).catch((errorMessage)=>{
    console.log(errorMessage);
});