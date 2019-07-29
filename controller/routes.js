const express = require("express");
const router = express.Router();
const jimp = require("jimp");
const crypto = require("crypto");
const Scraper = require("images-scraper");
const google = new Scraper.Google();

router.get("/image/:keyword", (req, res) => {
    google.list({
        keyword: req.params.keyword,
        num: 10
    }).then((result) => {
        for (i of result) {
            let uid = crypto.randomBytes(5).toString("hex");
            jimp.read(i.url, (err, result) => {
                if (err) throw err;
                result.resize(50, 50);
                result.grayscale();
                result.write(uid + '.jpg');
            });
        }
        res.send("done");
    }).catch(err => {
        console.log(err);
    });
});

module.exports = router;