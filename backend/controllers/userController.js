const express = require('express');
const userService= require('../services/userService');
const userController = express.Router();
userController.get('/', async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
},
);
userController.get('/:id', async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
},
);
userController.post('/', async (req, res) => {
    const user = await userService.addUser(req.body);
    res.json(user);
},
);
userController.put('/:id', async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json(user);
},
);
userController.delete('/:id', async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.json("User deleted");
},
);
userController.post('/login', async (req, res) => {
    const user = await userService.loginUser(req.body.email, req.body.password);
    res.json(user);
}
);
module.exports = userController;

