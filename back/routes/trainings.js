const express = require('express');
var router = express.Router();
const upload = require("../middlewares/upload");

const { getTrainings , addTraining,updateTraining,deleteTraining}= require('../controller/trainingController');

router.get('/',getTrainings);
router.post('/',upload.single("photo"),addTraining);
router.put('/:id',upload.single("photo"),updateTraining);
router.delete('/:id',deleteTraining);
module.exports=router;