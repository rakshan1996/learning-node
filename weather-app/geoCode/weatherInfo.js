const request=require('request');
const keys=require('./keys');

//const keys=appkeys;



const weatherInfo=(geoLocation)=>{

    return new Promise((resolve,reject)=>{
        var location=`${geoLocation.lat},${geoLocation.lng}`
        request({
        url:`https://api.darksky.net/forecast/${keys.weatherKey}/${location}`,
        json:true
        }
        ,
        (error,response,body)=>{
        
        var tempFaranhite=body.currently.temperature;
        var tempCelicius=(parseFloat(tempFaranhite)-32)*(5/9);
        resolve(parseInt(tempCelicius));
        }
        )          
      
    });

};

module.exports={
    weatherInfo
};


