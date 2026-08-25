var express = require("express");

var app = express();

app.use(express.static("public"));

app.get("/", function(req, resp) {
    resp.sendFile(__dirname + "/public/index.html");
});

app.listen(2004, function() {
    console.log("Server Started at Port no: 2004");
});