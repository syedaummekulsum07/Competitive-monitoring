const axios = require("axios");
const Parser = require("rss-parser");
const parser = new Parser();

const Competitor = require("../models/competitor");
const Update = require("../models/update");

// Auto-tag function
function getTag(text) {
    text = text.toLowerCase();
    if (text.includes("price")) return "Pricing";
    if (text.includes("launch") || text.includes("release")) return "Product Release";
    if (text.includes("campaign")) return "Campaign";
    return "General";
}

exports.addCompetitor = async (req, res) => {
    const competitor = new Competitor(req.body);
    await competitor.save();
    res.json({ message: "Competitor added" });
};

exports.fetchUpdates = async (req, res) => {
    const competitors = await Competitor.find();

    for (let comp of competitors) {
        const feed = await parser.parseURL(comp.rssUrl);

        for (let item of feed.items) {
            const exists = await Update.findOne({ title: item.title });
            if (exists) continue;

            await Update.create({
                competitor: comp.name,
                title: item.title,
                link: item.link,
                tag: getTag(item.title),
                date: new Date(item.pubDate)
            });
        }
    }

    res.json({ message: "Updates fetched" });
};

exports.getUpdates = async (req, res) => {
    const updates = await Update.find().sort({ date: -1 });
    res.json(updates);
};
