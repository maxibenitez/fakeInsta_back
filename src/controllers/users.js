const { response } = require('express');
const User = require('../models/User');

const getUsers = async(req, res = response) => {

    try{
        const user = await User.find({});
        console.log(user);

        if(user){
            return res.status(200).json({
                ok: true,
                count: user.length
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

const getUser = async(req, res = response) => {
    
    const { _id } = req.body;

    try{
        const user = await User.findOne({_id});
        console.log(user);

        if(user){
            return res.status(200).json({
                ok: true,
                username: user.username
            });
        }
        return res.status(404).json({
            ok: false,
            msg: 'No se encontró ningún usuario con ese id'
        });
        
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un problema'
        });
    }

}

const addUser = async(req, res = response) => {

    const { firstName, lastName, username, profilePic } = req.body;

    try{
        const user = await User.findOne({username});

        if(user){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe un usuario con ese username'
            });
        }

        const dbUser = new User({
            firstName: firstName,
            lastName: lastName,
            username: username,
            profilePic: profilePic
        });

        await dbUser.save();

        return res.status(201).json({
            ok: true,
            uid: dbUser.id
        });
        
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un problema'
        });
    }
}

module.exports = {
    getUsers,
    getUser,
    addUser
}