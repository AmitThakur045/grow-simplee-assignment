const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require('./Routes/userRoutes.js')
const movieRoutes = require('./Routes/movieRoutes.js')

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config({ path: "./src/config/config.env" });

// routing
app.use("/api/user", userRoutes);
app.use("/api/movie", movieRoutes);

app.get("/", (req, res) => {
  res.send("Grow Simplee API");
});

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((error) => console.log("MongoDB Error", error.message));

module.exports = app;