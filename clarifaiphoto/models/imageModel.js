const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
    imageId: String,
    tags: [{
        type: String
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Album'
    }
});

const ImagesModel = mongoose.model('Image', imageSchema);
module.exports = ImagesModel;