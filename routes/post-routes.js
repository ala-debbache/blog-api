const express = require("express");
const Post = require("../model.js");

const router = express.Router();

// get all posts from DB
router.get("/",async (req,res)=>{
    try {
        const posts = await Post.find({});
        console.log(posts);
        res.json(posts);
    } catch (err) {
        res.json(err);
    }
});

// get a single spesific post from DB
router.get("/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const post = await Post.findOne({_id: id});
        console.log(post);
        res.json(post);
    } catch (err) {
        res.json(err);
    }
});

// create new post
router.post("/",async (req,res)=>{
    try {
        console.log(req.body);
        const data = Post(req.body);
        await data.save();
        console.log(data);
        res.json(data);
    } catch (err) {
        res.json(err);
    }
});

// update a spesific post
router.patch("/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const result = await Post.updateOne({_id: id}, req.body);
        console.log(result);
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

// delete a spesific post
router.delete("/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const result = await Post.deleteOne({_id: id});
        console.log(result);
        res.json(result);
    } catch (err) {
        res.json(err);
    }
});

module.exports = router;