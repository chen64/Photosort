const express = require('express');
const router = require('express-promise-router')();
const UsersController = require('../controllers/usersController');

router.route('/')
    .get(UsersController.getAllUsers)
    .post(UsersController.newUser);

router.route('/:userId')
    .get(UsersController.getUser)
    .put(UsersController.replaceUser)
    .patch(UsersController.updateUser);

router.route('/:userId/albums')
    .get(UsersController.getUserAlbums)
    .post(UsersController.newUserAlbum);

router.route('/images')
    .get(UsersController.getImages)
    .post(UsersController.postImage);

router.route('/everything')
    .get(UsersController.getEverything)


module.exports = router;