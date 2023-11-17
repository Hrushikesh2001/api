const { model } = require('mongoose');
const pool = require('../db/db');


// Create a new user in the database
async function createUser(email, password) {
    try {
        // Insert the new user into the database
        const result = await pool.query(`
            INSERT INTO users (email, password)
            VALUES (?, ?)
        `, [email, password]);

        // Retrieve the newly created user by ID
        const id = result.insertId;
        const newUser = await getUser(id);
        return newUser;
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            // Duplicate entry error
            throw new Error('Email address is already in use.');
        } else {
            // Other errors
            console.error(error.stack);
            throw new Error('Error creating user in the database.');
        }
    }
}

// Update an existing user in the database
async function editUser(id, email, password) {
    try {
        // Update the user's email and password by ID
        await pool.query(`
            UPDATE users
            SET email = ?, password = ?
            WHERE id = ?
        `, [email, password, id]);
    } catch (error) {
        console.error(error.stack);
        throw new Error('Error updating user in the database.');
    }
}

// Delete a user by ID from the database
async function deleteUser(id) {
    try {
        // Delete the user by ID
        await pool.query(`
            DELETE FROM users
            WHERE id = ?
        `, [id]);
    } catch (error) {
        console.error(error.stack);
        throw new Error('Error deleting user from the database.');
    }
}


module.exports = createUser;
module.exports = editUser;
module.exports = deleteUser;
