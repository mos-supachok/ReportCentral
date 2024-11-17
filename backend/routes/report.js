const express = require('express')
const router = express.Router();
const reportControllers = require('../controller/report');
const multer = require('multer');
const upload = multer();

router.get('/', reportControllers.getReport);
router.post('/', upload.array('files[]'), reportControllers.createReport);
router.put('/:id', reportControllers.updateReport);
router.delete('/:id', reportControllers.deleteReport);

module.exports = router;