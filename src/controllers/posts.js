const { response } = require('express');

const getPosts = (req, res = response) => {

    console.log(req.body);

    return res.json({
        ok: true
    });
    
}

const getPost = (req, res = response) => {
    
    console.log(req.body);

    return res.json({
        ok: true
    });

}

const savePost = (req, res = response) => {

    console.log(req.body);

    return res.json({
        ok: true
    });
    
}

const deletePost = (req, res = response) => {
    
    console.log(req.body);

    return res.json({
        ok: true
    });

}

module.exports = {
    getPosts,
    getPost,
    savePost,
    deletePost
}