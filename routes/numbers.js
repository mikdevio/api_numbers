const express = require("express");

const numbersController = require("../controllers/numbers");

const router = express.Router();


router.route("/data")
    .get(numbersController.getData)
    .post(numbersController.postData)
    .patch(numbersController.patchData);

module.exports = router;