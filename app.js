const express = require('express');
const dotenv = require('dotenv');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

dotenv.config();

const app = express();
app.use(express.json());

// Use the login router for the "/login" path
app.use("/login", loginRouter);


app.use("/signup", signupRouter);


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

