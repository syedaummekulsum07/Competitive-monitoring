const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = process.env.PORT

const competitorRoutes = require("./routes/competitorRoutes");
require("dotenv").config()

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("../public"));

mongoose.connect(`${process.env.MONGO_URI}`)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.use("/api/competitors", competitorRoutes);

app.listen(port, () => console.log(`Server running on port ${port}`));
