const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'face103b8db94a13a6974b45603ea39c'
   });

   app.models.predict(Clarifai.GENERAL_MODEL, "https://www.flickr.com/photos/140188397@N07/27151008537").then(
    function(response) {
      // do something with response
    },
    function(err) {
      // there was an error
    }
  );