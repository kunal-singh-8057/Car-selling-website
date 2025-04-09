const express = require("express");
const router = express.Router();
const carControolers = require("../Controllers/CarController");



router.route("/addcars").post(carControolers.addcars);
router.route("/viewcars").get(carControolers.viewcars);


module.exports = router;