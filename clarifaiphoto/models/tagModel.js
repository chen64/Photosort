const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tagSchema = new mongoose.Schema({

    name: String,
    percentage: Schema.Types.Decimal128,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'Image'
    }

});

const TagsModel = mongoose.model('Tag', tagSchema);
module.exports = TagsModel;