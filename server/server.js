const express = require("express");
const cors = require("cors");
const router = require("../../todo_appp/server/api/routes/index");
const connection = require("../server/api/Config/config")
const app = express();
connection.database_config()
PORT = process.env.PORT || 5000;
app.use(express.json());

app.get("/", function (req, res) {
    res.send("API is up and running")
});
app.use("/api", router);
app.use((err, req, res, next) => {
    return res.status(500).json({
        error: err,
    });
});

app.listen(PORT, () =>
console.log("info", `server is up and running on port :${PORT}`)
).on('error', function (err) {
    console.error(`${err}`)
});
