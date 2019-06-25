const Post = require('../models/Post.js');

module.exports = {

    async store(req, res){
        const post = await Post.findById(req.params.id);
        post.likes += 1;
        await post.save();

        return res.json(post);
    }
};