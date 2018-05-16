const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const albumSchema = new Schema({
    albumId: String,
    images: [{
        type: Schema.Types.ObjectId,
        ref: 'Image'
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

const AlbumsModel = mongoose.model('Album', albumSchema);
module.exports = AlbumsModel;








// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const albumSchema = new Schema({
//     albumId: String,
//     images: [{
//         type: String
//     }],
//     owner: {
//         type: Schema.Types.ObjectId,
//         ref: 'user'
//     }
// });

// const Albums = mongoose.model('album', albumSchema);
// module.exports = Albums;