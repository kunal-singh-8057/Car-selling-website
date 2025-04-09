const express = require("express");
const router = express.Router();
const userControolers = require("../Controllers/userControllers");
const Auths = require("../Middlewares/Auths");


router.route("/register").post(userControolers.register);
router.route("/login").post(userControolers.login);
router.route("/viewusers").get(userControolers.view);
router.route("/verify").get(Auths,userControolers.verify);

module.exports = router;