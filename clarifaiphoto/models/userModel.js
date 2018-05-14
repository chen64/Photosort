const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id: Number,
    userName: String,
    password: String,
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'album'
    }]
});

const Users = mongoose.model('user', userSchema);
module.exports = Users;