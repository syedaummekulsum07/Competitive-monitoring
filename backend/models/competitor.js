const mongoose = require("mongoose");

const CompetitorSchema = new mongoose.Schema({
    name: String,
    rssUrl: String
});

module.exports = mongoose.model("Competitor", CompetitorSchema);
