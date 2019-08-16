const mongoose = require("mongoose");
const Schema = mongoose.Schema
const SenateSchema = new Schema({
    firstname: {
        type: String,
        trim: true,
    },
    lastname: {
        type: String,
        trim: true,
    },
    firstname: {
        type: String,
        trim: true,
    },
    birthdate: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    party: {
        type: String,
        trim: true,
    },
    twitter: {
        type: String,
        trim: true,
    },
    facebook: {
        type: String,
        trim: true,
    },
    youtube: {
        type: String,
        trim: true,
    },
    website: {
        type: String,
        trim: true,
    },
    contact: {
        type: String,
        trim: true,
    },
    nextelection: {
        type: String,
        trim: true,
    },
    state:
    {
        type: String,
        trim: true,
    },
    title: {
        type: String,
        trim: true,
    },
})
const senateMember = mongoose.model("Senate", SenateSchema);
module.exports = senateMember