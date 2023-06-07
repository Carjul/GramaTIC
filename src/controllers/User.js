const Usuarios = require('../models/Usuarios');

const getUser= async (req, res) => {
        const usuarios = await Usuarios.find();
        res.json(usuarios)
    }



const getUserById=async (req, res) => {
        const usuarios = await Usuarios.findById(req.params.id);
        res.json(usuarios)
    }


const createUser= async (req, res) => {
        const { Nombres, Email, Rol, Password, niveles } = req.body;
        const newUsuario = { Nombres, Email, Rol, Password, niveles };
        await Usuarios.create(newUsuario);
        res.json({ status: 'Usuario creado' })
    
    }
const updateUser= async (req, res) => {
    const { id } = req.params;
    const { Nombres, Email, Rol, Password, niveles } = req.body;
    const newUsuario = { Nombres, Email, Rol, Password, niveles };
    await Usuarios.findByIdAndUpdate(id, newUsuario);
    res.json({ status: 'Usuario actualizado' })

}
const deleteUser= async (req, res) => {
        const { id } = req.params;
        await Usuarios.findByIdAndRemove(id);
        res.json({ status: 'Usuario eliminado' })
}


module.exports={getUser,getUserById, createUser ,updateUser, deleteUser}