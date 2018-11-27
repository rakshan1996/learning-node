const request=require('request');
const weatherInfo=(geoLocation,callback)=>{
var location=`${geoLocation.lat},${geoLocation.lng}`
    request({
    url:`https://api.darksky.net/forecast/49daf92949a2c4a288021fa675beb509/${location}`,
    json:true
},(error,response,body)=>{
    
    var tempFaranhite=body.currently.temperature;
    var tempCelicius=(parseFloat(tempFaranhite)-32)*(5/9);
    callback(parseInt(tempCelicius));
}
);

};

module.exports={
    weatherInfo
};