const Clarifai = require('clarifai');

const app = new Clarifai.App({
    apiKey: 'b271cc42fd0a48de8eb922211ff8e883'
});

module.exports = {

    clarifaiImg: function (imgUrl) {
        console.log("singleImgFunction " + imgUrl);

        let tags = [];
        

        app.models.predict(Clarifai.GENERAL_MODEL, imgUrl).then(
            function (response) {
                
                console.log("\n---------clarifaiImg function------------------------------")
                console.log("RESPONSE OBJECT--------------------------------------------");
                console.log(response);
                console.log("END OF RESPONSE OBJECT-------------------------------------");

                const arrayOfTagObjects = response.outputs[0].data.concepts;

                for (let s of arrayOfTagObjects) {
                    tags.push(s.name);
                }

                console.log("RETURN OBJECT----------------------------------------------");
                console.log({imgUrl, tags});
                console.log("END OF RETURN OBJECT---------------------------------------");

                return {imgUrl, tags};
            },

            function (err) {
                console.log(err);
            }
        );
    },
}