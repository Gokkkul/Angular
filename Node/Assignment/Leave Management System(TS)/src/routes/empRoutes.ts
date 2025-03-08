const empController = require("../controllers/empController");
const managerController = require("../controllers/managerController");
const express = require('express');

const router = express.Router();

router.get("/", empController.getEmployees);
router.get("/pending-leaves", empController.getPendingLeaves);
router.get("/leaves/:id", empController.getLeavesById)
router.post("/add-leaves", empController.addLeave);


module.exports = router;

export {}