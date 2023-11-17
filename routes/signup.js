const express = require('express');
const dotenv = require('dotenv');
const { createUser, editUser, deleteUser } = require('../models/signup');

dotenv.config();

const router = express.Router();

// Route to create a new user
router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const newUser = await createUser(email, password);
        res.status(201).json({ user: newUser, status: true, message: "User created successfully" });
    } catch (error) {
        console.error(error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Edit Route to update an existing user by ID
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const { email, password } = req.body;
        await editUser(id, email, password);
        res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
        console.error(error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to delete a user by ID
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        await deleteUser(id);
        res.status(204).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

