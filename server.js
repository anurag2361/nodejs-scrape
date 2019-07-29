const express = require("express");
const app = express();
const routes = require("./controller/routes.js");
const port = 4040;

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use("/img", routes);

app.listen(port, () => {
    console.log(`app listening on ${port}`);
});