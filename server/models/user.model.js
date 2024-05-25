const mongoose = require("mongoose");

const userSchemea = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Password is required"],
    },
});

const User = mongoose.model("user", userSchemea);

module.exports = User;
