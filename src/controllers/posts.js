const { response } = require('express');
const Post = require('../models/Post');

const getPosts = async(req, res = response) => {

    try{
        const post = await Post.find({});
        console.log(post);

        if(post){
            return res.status(200).json({
                ok: true,
                count: post.length
            });
        }
        return res.status(400).json({
            ok: false,
            msg: 'No se pudo procesar su solicitud'
        });
        
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un problema'
        });
    }

}

const getPost = async(req, res = response) => {
    
    const { _id } = req.body;

    try{
        const post = await Post.findOne({_id});
        console.log(post);

        if(post){
            return res.status(200).json({
                ok: true,
                uid: post.id
            });
        }
        return res.status(404).json({
            ok: false,
            msg: 'No se encontró ningún post con ese id'
        });
        
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un problema'
        });
    }

}

const addPost = async(req, res = response) => {

    const { userId, imageId } = req.body;

    try{

        const dbPost = new Post({
            userId: userId,
            imageId: imageId
        });

        await dbPost.save();

        return res.status(201).json({
            ok: true,
            uid: dbPost.id
        });

    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un problema'
        });
    }
}

module.exports = {
    getPosts,
    getPost,
    addPost
}