const express = require('express');

const{
    getDashboardData
} = require("../controllers/dashboardController")

const router = express.Router();

const {protect} = require("../middleware/authMiddleware")


router.get("/",protect,getDashboardData);


module.exports = router;


