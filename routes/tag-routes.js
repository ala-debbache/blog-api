const express = require("express");
const Post = require("../model.js");

const router = express.Router();


// get posts by tag name
router.get("/:tag",async (req,res)=>{
    const tag = req.params.tag;
    try {
        const posts = await Post.find({tags: tag});
        console.log(posts);
        res.json(posts);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;