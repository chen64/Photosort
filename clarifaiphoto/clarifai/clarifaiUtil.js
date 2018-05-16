const Clarifai = require('clarifai');
const SimpleUserModel = require('../models/simpleUserModel');
const SimpleImageModel = require('../models/simpleImageModel');


const app = new Clarifai.App({
    apiKey: 'd784087cfe654411bbc6dc815491071b'
});

module.exports = {

    tabulateUserTagsAndReturnUser: function(userName) {

    },

    createSimpleUser: async function(userName, flickrId, albumId) {
        console.log("IN SIMPLE USER");
        const userObject = {userName: userName, flickrId: flickrId, albumId: albumId};
        const newUser = new SimpleUserModel(userObject);
        const user = await newUser.save();
        console.log(user);
        return user;
    },

    clarifaiImg: async function (username, imgUrl) {
        console.log("singleImgFunction " + imgUrl);

        let tags = [];
        let tagsProb = [];

        app.models.predict(Clarifai.GENERAL_MODEL, imgUrl).then(
            function (response) {

                const arrayOfTagObjects = response.outputs[0].data.concepts;

                for (let s of arrayOfTagObjects) {
                    tags.push(s.name);
                    tagsProb.push(s.value);
                }

                console.log("RETURN OBJECT----------------------------------------------");
                console.log(tags);
                console.log("END OF RETURN OBJECT---------------------------------------");
                console.log(tagsProb);


                const tagProbabilities = [];
                tags.forEach((tag,index) => {
                    tagProbabilities.push({
                        [tag]: tagsProb[index]
                    })
                })

                console.log(tagProbabilities);

                //GET USER ID OF the username
                
                    SimpleUserModel.findOne({userName: username}).then( (data) =>{
                    console.log(data);
                    user=data;
                    console.log(user._id);
                    const newSimpleImage = new SimpleImageModel({imgName: imgUrl, tags: tagProbabilities, owner: user._id});
                    newSimpleImage.owner = user._id;
                    newSimpleImage.save();
                    user.images.push(newSimpleImage);
                    user.save();

                })
                console.log("CONSOLING LOGGING IN CLARIFAI UTIL(((((");
                console.log(newSimpleImage);
                console.log("------------------------------------------");

                
                return newSimpleImage;
            },

            function (err) {
                console.log(err);
            }
        );
    }
}