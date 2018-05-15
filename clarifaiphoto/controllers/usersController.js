const UserModel = require('../models/userModel');
const AlbumModel = require('../models/albumModel');
const ImageModel = require('../models/imageModel');


module.exports = {
    getAllUsers: async (req, res, next) => {
        const users = await UserModel.find({});
        // console.log("\n");
        // console.log("=====/getAllUsers==userObject/=======================");
        // console.log(users);
        // console.log("=====================================================");
        res.status(200).json(users);
    },

    newUser: async (req, res, next) => {
        const newUser = new UserModel(req.body);
        const user = await newUser.save();
        // console.log("\n");
        // console.log("=====/newUser==userObject/===========================");
        // console.log(user);
        // console.log("=====================================================");
        res.status(200).json(user);
    },

    getUser: async (req, res, next) => {
        const { userId } = req.params;
        const user = await UserModel.findById(userId);
        // console.log("\n");
        // console.log("=====/getUser==userObject/===========================");
        // console.log(user);
        // console.log("=====================================================");
        res.status(200).json(user);
    },

    replaceUser: async (req, res, next) => {
        //req.body must contain all the feilds
        const { userId } = req.params;
        const newUser = req.body;
        const result = await UsersModel.findByIdAndUpdate(userId, newUser);
        // console.log("\n");
        // console.log("=====/replaceUser==userObject/=======================");
        // console.log(result);
        // console.log("=====================================================");
        res.status(200).json({ success: true});
    },

    updateUser: async (req, res, next) => {
        //req.body can contain some of the fields
        const { userId } = req.params;
        const newUser = req.body;
        const result = await UserModel.findByIdAndUpdate(userId, newUser);
        // console.log("\n");
        // console.log("=====/updateUser==userObject/========================");
        // console.log(result);
        // console.log("=====================================================");
        res.status(200).json({ success: true});  
    },

    getUserAlbums: async (req, res, next) => {
        const { userId } = req.params;
        const user = await UserModel.findById(userId).populate('albums');
        // console.log("\n");
        // console.log("=====/getUserAlbums==userObject/=====================");
        // console.log(user);
        // console.log("=====================================================");
        res.status(200).json(user.albums);
    },

    newUserAlbum: async (req, res, next) => {
        const { userId } = req.params;
        // console.log("req.body:: ", req.body);

        const newAlbum = new AlbumModel(req.body);

        const user = await UserModel.findById(userId);
        // console.log("User found: ", user);
        newAlbum.owner = user._id;
        // console.log("NewAblum: ", newAlbum);

        await newAlbum.save();
        user.albums.push(newAlbum);
        await user.save();
        user.populate('albums');
        console.log("\n");
        console.log("=====/newUserAlbum==userObject/======================");
        console.log(user);
        console.log("=====================================================");
        res.status(201).json(newAlbum);
    },

    newImage: async (req, res, next) => {
        const newImage = new ImageModel(req.body);
        const image = await newImage.save();
        // console.log("\n");
        // console.log("=====/newUser==userObject/===========================");
        // console.log(user);
        // console.log("=====================================================");
        res.status(200).json(image);
    },







    //route for testing
    test: async (req, res, next) => {

    },

    //route for testing
    test2: async (req, res, next) => {

    }

};