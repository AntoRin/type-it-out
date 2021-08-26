const express = require("express");
const path = require("path");
require("dotenv").config();
const { webHookRouter } = require("./webHooks");
const words = require("./wordList");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.get("/data", async (req, res) => {
   let data = await words.getData();
   res.json(data);
});

app.use(webHookRouter);

app.get("*", (req, res) => {
   res.sendFile(path.join(__dirname, "build", "index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
   console.log("Listening on port 5000...");
});
