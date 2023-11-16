const mongoose = require("mongoose");


const authSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },
    dateCreated: {
        type: String,
        required: true
    }
})

const authModel = mongoose.model("users", authSchema);

module.exports = authModel;