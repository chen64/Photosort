const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const simpleImageSchema = new Schema({
    imgName: String,
    tags: Array,
    owner: [{
        type: Schema.Types.ObjectId,
        ref: 'SimpleUser'
    }]
});

const SimpleImagesModel = mongoose.model('SimpleImage', simpleImageSchema);
module.exports = SimpleImagesModel;