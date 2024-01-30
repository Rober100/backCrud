const { createUser } = require("../controllers/createUser.js")

const createUserHandler = async (req, res) => {
    try {

        const { name, email, password } = req.body;
        const user = await createUser(name, email, password);
        res.status(200).json({ msg: "Usuario Creado con Éxito", user });
    } catch (error) {
        if (error.message === 'El email ya esta en uso') {
            res.status(409).json({ error: 'El email ya esta en uso' });
        } else {
            console.error(error);
            res.status(500).json({ error: 'Error al crear usuario' });
        }
    }
}

module.exports = { createUserHandler }