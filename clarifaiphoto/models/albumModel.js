const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    // _creator: { type: Number, ref: 'user' },
    albumId: String,
    images: [{
        type: String
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    }
});

const Albums = mongoose.model('album', albumSchema);
module.exports = Albums;