const express = require('express');
const router = express.Router();
module.exports = router;
const apiComputerController=require("../controller/apiComputer");

router.get('/api/pc',       apiComputerController.getComputers);
router.get('/api/pc/:id',    apiComputerController.getComputer);
router.post('/api/pc',      apiComputerController.insertComputer);
router.delete('/api/pc/:id', apiComputerController.deleteComputer);
router.put('/api/pc/:id',    apiComputerController.updateComputer);