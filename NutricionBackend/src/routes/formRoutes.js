const express = require('express');
const formController = require('../controllers/formController');

const router = express.Router();

router.post('/form-data', formController.postFormData);
router.get('/form-data', formController.getFormData);

module.exports = router;
