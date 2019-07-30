const express = require("express");
const app = express();
const routes = require("./controller/routes.js");
const port = 4040;

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("type the keyword you want to search in the route like this, http://localhost:4040/img/image/keyword");
})
app.use("/img", routes);

app.listen(port, () => {
    console.log(`app listening on http://localhost:${port}`);
});