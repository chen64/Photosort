const router = require("express").Router();
const path = require("path");
const passport = require("passport");

router.get("/login", (req, res) => {
    res.send("looging in");
});

router.get("/flickr",
(req, res, next) => { 
    console.log('inside GET /flickr')
    next();
}, passport.authenticate("flickr")
, (req, res) => {
      res.send("ddone");
});

router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/")
})

router.get("/flickr/redirect", passport.authenticate("flickr"), (req, res) => {
    //res.send(req.user);
    res.redirect("http://localhost:3000/dashboard")

})

module.exports = router;  