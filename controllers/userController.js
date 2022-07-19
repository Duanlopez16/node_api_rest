import { response } from "express";


const get_usuarios = (req, res = response) => {
    const params = req.query;
    res.json({
        status: 'success',
        message: 'get Api',
        params
    });
}

const post_usuarios = (req, res = response) => {
    const data = req.body;
    res.json({
        status: 'success',
        message: 'add usuario',
        data
    });
}

const put_usuarios = (req, res = response) => {
    const id = req.params.id;
    res.json({
        status: 'success',
        message: 'put usuario',
        id
    });
}

const delete_usuario = (req, res = response) => {
    res.json({
        status: 'success',
        message: 'delete usuario'
    });
}

export {
    get_usuarios,
    post_usuarios,
    put_usuarios,
    delete_usuario
}