const passport = require("passport");
const FlickrStrategy = require("passport-flickr").Strategy;
const keys = require("./keys")
const User = require("../models/simpleUserModel")

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    User.findById(id).then((user) => {
        done(null, user.id) 
    });
})

passport.use(new FlickrStrategy({
    //options
    consumerKey: keys.flickr.consumerKey,
    consumerSecret: keys.flickr.consumerSecret,
    callbackURL: "/auth/flickr/redirect"
    }, (accessToken, refreshToken, profile, done) => {
    //check existance
        User.findOne({flickrId: profile.id}).then((currentUser) => {
            if(currentUser){
                //existance = true
                console.log(profile)
                console.log("user is: " + currentUser)
                console.log(accessToken);
                console.log(refreshToken)
                done(null, currentUser);
            }
            else{
                //existance = null
                new User({
                    userName: profile.displayName,
                    flickrId: profile.id,
                    
                }).save().then((newUser) => {
                    console.log("new user created: " + newUser)
                    done(null, newUser);
                })
            }
        })
    })
)