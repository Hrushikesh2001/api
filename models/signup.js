const mongoose = require("mongoose");
const validator = require("validator");


const signupSchema = new mongoose.Schema({

    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: [true, "Email id already present"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },
    phone: {
        type: Number,
        min: 10,
        required: true,
        unique: true
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        unique: true
    }

})


const Signup = mongoose.model('Signup', signupSchema);

module.exports = Signup;
