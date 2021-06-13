const https = require("https");

function processJson(req, res) {
      
   var url = 'https://byui-cse.github.io/cse341-course/lesson03/items.json';

   https.get(url, function(response){
      var body = '';

      response.on('data', function(chunk){
         body += chunk;
      });

      response.on('end', function(){
         var jsonResponse = JSON.parse(body);

         var stuff = {data:jsonResponse}

         res.render('results', stuff);

      });
   }).on('error', function(e){
         console.log("Got an error: ", e);
   });
}

module.exports = {processJson: processJson};