const request=require('request');
const keys="yLFBAtZxOtgcZSgAw2Ae1SSAXPG1hQZD";
var latitude;
var longtitude;
request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=yLFBAtZxOtgcZSgAw2Ae1SSAXPG1hQZD&location=%20c4%20mukhram%20garden%20%20tilak%20nagar%20new%20delhi`,
    json: true
},(error,response,body)=>{
    /* console.log(error);
    console.log(response); */
 //console.log(JSON.stringify(body,undefined,4));

 //console.log(`Address enterd: ${body.results[0].providedLocation.location}`)
 latitude=body.results[0].locations[0].latLng.lat;
longtitude=body.results[0].locations[0].latLng.lng;

console.log(`lattitude:${latitude} => longtitude:${longtitude}`);
});