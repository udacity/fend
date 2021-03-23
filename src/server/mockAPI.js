var https = require('follow-redirects').https;
const request = require('request');
  
  var options = {
    'method': 'POST',
    'hostname': 'api.meaningcloud.com',
    'path': '/summarization-1.0?key='+process.env.license_key+'&url='+'https://www.nytimes.com/2021/03/22/business/biden-infrastructure-spending.html?action=click&module=Spotlight&pgtype=Homepage&sentences=1',
    'headers': {
    },
    'maxRedirects': 20
  };



request('https://api.meaningcloud.com/summarization-1.0?key='+process.env.license_key+'&url=https://www.nytimes.com/2021/03/22/business/biden-infrastructure-spending.html?action=click&module=Spotlight&pgtype=Homepage&sentences=1', { json: true }, (err, res, body) => {
  if (err) { return console.log(err); }
  //console.log(body);
  module.exports = body
  console.log(module.exports)
  return body
  //console.log(body.explanation);
});



//console.log(module)
//req.end()