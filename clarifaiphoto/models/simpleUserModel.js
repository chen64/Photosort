const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const simpleUserSchema = new Schema({
    userName: String,
    flickrId: String,
    albumId: String,
    tokenId: String,
    tagCount: Array,
    images: [{
        type: Schema.Types.ObjectId,
        ref: 'SimpleImage'
    }]
});

const SimpleUsersModel = mongoose.model('SimpleUser', simpleUserSchema);
module.exports = SimpleUsersModel;