const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageId: String,
    tags: [{
        type: String
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'album'
    }
});

const Images = mongoose.model('image', imageSchema);
module.exports = Images;