const express = require('express');
const userService = require('../services/userService');
const userController = express.Router();
const jwt = require("../config/token");
const protectUser = require("../middleware/userAuth.js");
const asyncHandler = require("express-async-handler");

userController.get('', asyncHandler(async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
}));

userController.get('/:id', protectUser, asyncHandler(async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json({ user:user, token: jwt(user) });
}));

userController.post('', asyncHandler(async (req, res) => {
    const user = await userService.addUser(req.body);
    res.status(200).json({ user:user, token: jwt(user) });
}));

userController.put('/:id', asyncHandler(async (req, res) => {
    const user = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(user);
}));

userController.delete('/:id', asyncHandler(async (req, res) => {
    await userService.deleteUser(req.params.id);
    res.json("User deleted");
}));

userController.post("/loginUser", asyncHandler(async (req, res) => {
    try {
        const user = await userService.loginUser(req.body.email, req.body.password);
        res.status(200).json({ user: user, token: jwt(user) });
    } catch (error) {
        res.status(400).json({ message: "User not found" });
    }
}));


userController.get('/:id/favorites', asyncHandler(async (req, res) => {
    const favorites = await userService.userFavoriteBooks(req.params.id);
    res.json(favorites);
}));

userController.put('/changepass/:id',protectUser, asyncHandler(async (req, res) => {
    const user = await userService.updatePassword(req.body.oldPassword, req.body.newPassword, req.params.id);
    res.status(200).json(user);
}));
module.exports = userController;
