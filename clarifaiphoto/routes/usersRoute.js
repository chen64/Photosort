const express = require('express');
const router = require('express-promise-router')();
const UsersController = require('../controllers/usersController');

router.route('/users')
    .get(UsersController.getAllUsers)
    .post(UsersController.newUser);

// router.route('/users/:userId')
//     .get(UsersController.getUser)
//     .put(UsersController.replaceUser)
//     .patch(UsersController.updateUser);

// router.route('/users/:userId/albums')
//     .get(UsersController.getUserAlbums)
//     .post(UsersController.newUserAlbum);

router.route('/users/images')
    .get(UsersController.getImages)
    .post(UsersController.postImage);

// router.route('/users/everything')
//     .get(UsersController.getEverything)


module.exports = router;