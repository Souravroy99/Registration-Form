const express = require("express");
const router = express.Router();
const formController = require("../controller/index");

/*--------Add data into the form---------*/
router.route("/form").post(formController) ;

module.exports = router;
