const { response } = require('express');
const Post = require('../models/Post');

const getPosts = async(req, res = response) => {

    try{
        const post = await Post.find({});

        if(post){
            return res.status(200).json(post);
        }
        return res.status(400).send('No se pudo procesar su solicitud');
        
    }catch(error){
        return res.status(500).send('Ha ocurrido un problema');
    }

}

const getPost = async(req, res = response) => {

    try{
        const post = await Post.findOne({_id: req.params.id});

        if(post){
            return res.status(200).json(post);
        }
        return res.status(404).send('No se encontró ningún post con ese id');
        
    }catch(error){
        return res.status(500).send('Ha ocurrido un problema');
    }

}

const addPost = async(req, res = response) => {

    const { _id, userId, imageId } = req.body;
    console.log(req.body)

    try{

        const dbPost = new Post({
            _id: _id,
            userId: userId,
            imageId: imageId
        });

        await dbPost.save();

        return res.status(201).json({
            ok: true,
            uid: dbPost.id
        });

    }catch(error){
        return res.status(500).send('Ha ocurrido un problema');
    }
}

module.exports = {
    getPosts,
    getPost,
    addPost
}