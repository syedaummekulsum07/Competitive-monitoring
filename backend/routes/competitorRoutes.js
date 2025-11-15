const express = require("express");
const router = express.Router();
const controller = require("../controllers/competitorController");

router.post("/add", controller.addCompetitor);
router.get("/fetch", controller.fetchUpdates);
router.get("/updates", controller.getUpdates);

module.exports = router;
