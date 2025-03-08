const managerController = require("../controllers/managerController");
const express = require('express');


const router = express.Router();


router.get("/pending-leaves", managerController.getPendingLeaves);
router.get("/rejectLeave/:id", managerController.rejectLeave);
router.get("/approveLeave/:id", managerController.approveLeave);



module.exports = router;

export {}