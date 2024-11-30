const express = require('express')
const router = express.Router();
const reportControllers = require('../controller/report');

const multer = require('multer');
const upload = multer();

const passport = require('passport');

const authentication = passport.authenticate('jwt', { session: false })

router.get('/', authentication, reportControllers.getReport);
router.post('/', authentication, upload.array('files[]'), reportControllers.createReport);
router.put('/:id', authentication, reportControllers.updateReport);
router.delete('/:id', authentication, reportControllers.deleteReport);

module.exports = router;