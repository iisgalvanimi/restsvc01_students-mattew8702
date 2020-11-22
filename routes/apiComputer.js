const express = require('express');
const router = express.Router();
module.exports = router;
const apiComputerController=require("../controller/apiComputer");

router.get('/api/tuttiPc',       apiComputerController.getComputers);
router.get('/api/unPc/:id',    apiComputerController.getComputer);
router.post('/api/nuovoPc',      apiComputerController.insertComputer);
router.delete('/api/cancellaPc/:id', apiComputerController.deleteComputer);
router.put('/api/aggiornaPc/:id',    apiComputerController.updateComputer);