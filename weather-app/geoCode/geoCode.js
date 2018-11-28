const request=require('request');
const yargs=require('yargs');
const keys=require('./keys');


var latitude;
var longtitude;
var geoLocation;

var geoCoding=(address,callback) =>{

    const encodedAddress=encodeURIComponent(address);
    
request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapKey}&location=${encodedAddress}`,
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
         geoLocation={
            lat:latitude,
            lng:longtitude
        };
        callback(geoLocation);
        
    }
  
});

return geoLocation;

};

module.exports= {
    geoCoding
};