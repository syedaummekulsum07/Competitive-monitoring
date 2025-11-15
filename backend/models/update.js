const mongoose = require("mongoose");

const UpdateSchema = new mongoose.Schema({
    competitor: String,
    title: String,
    link: String,
    tag: String,
    date: Date
});

module.exports = mongoose.model("Update", UpdateSchema);
