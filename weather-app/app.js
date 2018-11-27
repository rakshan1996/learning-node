const request=require('request');
const keys="yLFBAtZxOtgcZSgAw2Ae1SSAXPG1hQZD";
request({
    url:`http://www.mapquestapi.com/geocoding/v1/address?key=yLFBAtZxOtgcZSgAw2Ae1SSAXPG1hQZD&location=%20c4%20mukhram%20garden%20%20tilak%20nagar%20new%20delhi`,
    json: true
},(error,response,body)=>{
    /* console.log(error);
    console.log(response); */
 console.log(body);
});