const express = require("express");
const fs = require("fs");
const app = express();
const cors = require("cors");
const port = 9999;

app.use(cors());
app.use(express.json());

app.get("/", function(req, res) {
    res.send("ça marche yo");
});

app.post("/note", function(req, res) {
    const str = `
    title: ${req.body.title}
    ------------------------
    ${req.body.body}
    ------------------------\n
    `;
    fs.writeFileSync("./notes.txt", str);
    res.send(str);
});

app.listen(port);