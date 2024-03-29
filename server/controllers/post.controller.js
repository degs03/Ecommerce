const Post = require("../models/post.model");

module.exports.findAllPosts = async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200);
        res.json(post);
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.findPost = async (req, res) => {
    const { id } = req.params;
    try {
        const post = await Post.findOne({ _id: id });
        if (post) {
            res.status(200);
            res.json(post);
            return;
        }
        res.status(404);
        res.json({ error: "Post no encontrado" });
    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create(req.body);
        res.status(201);
        res.json(newPost);
        console.log("se ha creado exitosamente!");
    } catch (error) {
        res.status(500);
        res.json({ message: error });
    }
};
module.exports.updatePost = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedPost = await Post.findOneAndUpdate({ _id: id }, req.body, { new: true, runValidators: true });
        res.status(200);
        res.json(updatedPost);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};
module.exports.deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.deleteOne({ _id: req.params.id });
        res.status(200);
        res.json(deletedPost);

    } catch (error) {
        res.status(500);
        res.json({ error: error });
    }
};