const express = require('express');
const { getLogins, getLogin } = require('../models/login');
const router = express.Router();

// Route to get all logins
router.get("/", async (req, res) => {
    try {
        const logins = await getLogins();
        res.status(200).json(logins);
    } catch (error) {
        console.error(error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Route to get a specific user by ID
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const user = await getLogin(id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        console.error(error.stack);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
