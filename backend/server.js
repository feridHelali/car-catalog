const http = require("http");
const mongoose = require("mongoose");
const app = require("./app")


mongoose.set("strictQuery", false)
mongoose.connect("mongodb://localhost:27017/carDb")
    .then(() => {
        console.log("successfully connected to db")
    })
    .catch(error => {
        console.log("error ",error)
    });

const server = http.createServer(app);

server.listen(3030, () => {
    console.log("Server Listening on http://localhost:3030")
})

