const { response } = require('express');
const Image = require('../models/Image');

const getImages = async(req, res = response) => {

    try{
        const image = await Image.find({});
        console.log(image);

        if(image){
            return res.status(200).json({
                ok: true,
                count: image.length
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

const getImage = async(req, res = response) => {
    
    const { _id } = req.body;

    try{
        const image = await Image.findOne({_id});
        console.log(image);

        if(image){
            return res.status(200).json({
                ok: true,
                uid: image.id
            });
        }
        return res.status(404).json({
            ok: false,
            msg: 'No se encontró ninguna imagen con ese id'
        });
        
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un problema'
        });
    }

}

const addImage = async(req, res = response) => {

    const { _id, src, description } = req.body;

    try{
        const image = await Image.findOne({_id});

        if(image){
            return res.status(400).json({
                ok: false,
                msg: 'Ya existe una imagen con este id'
            });
        }

        const dbImage = new Image({
            _id: _id,
            src: src,
            description: description
        });

        await dbImage.save();

        return res.status(201).json({
            ok: true,
            uid: dbImage._id
        });
        
    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Ha ocurrido un problema'
        });
    }
    
}

module.exports = {
    getImages,
    getImage,
    addImage
}