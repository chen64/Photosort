const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: String,
    flickrId: String,
    albums: [{
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }]
});

const UsersModel = mongoose.model('User', userSchema);
module.exports = UsersModel;