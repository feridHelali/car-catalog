require("dotenv").config();
require("./config/database").connect();
const http = require("http");
const mongoose = require("mongoose");
const app = require("./app")

const server = http.createServer(app);

server.listen(3030, () => {
    console.log("Server Listening on http://localhost:3030")
})

