const express = require('express');
const { dummyFunc, dummyPostFunc, dummyPatchFunc, dummyDeleteFunc } = require('../controller/dummy.controller');
const router = express.Router();

router.get('/', dummyFunc);
router.post('/', dummyPostFunc);
router.patch('/:id', dummyPatchFunc);
router.delete('/:id', dummyDeleteFunc);



module.exports = router;