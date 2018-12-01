const request=require('request');
const yargs=require('yargs');
const keys=require('./keys');


var latitude;
var longtitude;
var geoLocation;

var geoCoding=(address) =>{

    return new Promise((resolve,reject)=>{
        const encodedAddress=encodeURIComponent(address);    
        request({
            url:`http://www.mapquestapi.com/geocoding/v1/address?key=${keys.mapKey}&location=${encodedAddress}`,
            json: true
        },(error,response,body)=>{
           
            if(error){
                reject("Unable to connect to a google server");
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
                resolve(geoLocation);   
            }
        });
    })
    
};

module.exports= {
    geoCoding
};