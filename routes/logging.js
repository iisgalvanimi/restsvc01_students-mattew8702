const express = require('express');
const router = express.Router();
module.exports = router;


router.use(function (req, res, next) {
    console.log(`In esecuzione ${req.method} "${req.url}" da ${req.ip} `);
    next()
});


