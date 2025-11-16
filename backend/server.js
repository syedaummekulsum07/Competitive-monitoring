const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config()
const port = process.env.PORT || 5000;

const competitorRoutes = require("./routes/competitorRoutes");


const app = express();
app.use(express.json());
app.use(cors());
// Serve frontend files from "public" folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/competitors", competitorRoutes);

// Fallback for frontend (for all unmatched routes)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});


mongoose.connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server running on port ${port}`));
