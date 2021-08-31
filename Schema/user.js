const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: String,
password: String,

score: Number
});

module.exports = {

    userSchema

}