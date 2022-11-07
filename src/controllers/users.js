const { response } = require('express');
const User = require('../models/User');

const getUsers = async(req, res = response) => {

    try{
        const user = await User.find();

        if(user){
            return res.status(200).json(user);
        }
        return res.status(400).send('No se pudo procesar su solicitud');
        
    }catch(error){
        return res.status(500).send('Ha ocurrido un problema');
    }
    
}

const getUser = async(req, res = response) => {

    try{
        const user = await User.findOne({_id: req.params.id});

        if(user){
            return res.status(200).json(user);
        }
        return res.status(404).send('No se encontró ningún usuario con ese id');
        
    }catch(error){
        return res.status(500).send('Ha ocurrido un problema');
    }

}

const addUser = async(req, res = response) => {

    const { _id, firstName, lastName, username, profilePic } = req.body;

    try{
        const user = await User.findOne({username});

        if(user){
            return res.status(400).send('Ya existe un usuario con ese username');
        }

        const dbUser = new User({
            _id: _id,
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
        return res.status(500).send('Ha ocurrido un problema');
    }
}

module.exports = {
    getUsers,
    getUser,
    addUser
}