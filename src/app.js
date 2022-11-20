const express = require("express");
const cors = require("cors");
const app = express();

/* Setings */
app.set("port", process.env.PORT || 5000);

/* Midlewares */
app.use(cors());
app.use(express.json());

/* Routes */
app.use("/api/notes", require("./routes/note"));

module.exports = app;
