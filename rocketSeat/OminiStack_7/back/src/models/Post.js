const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
        type: Number,
        degault: 0,
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);