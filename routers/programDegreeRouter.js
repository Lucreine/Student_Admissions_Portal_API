const express = require('express');
const router = express.Router();
const {createProgramDegree, getProgramDegreeById, getAllProgramDegrees, deleteProgramDegree} = require('../controllers/programDegreeControllers');

router.post('/programDegree', createProgramDegree);
router.get('/programDegree/:program_id/:degree_id',getProgramDegreeById);
router.get('/programDegree', getAllProgramDegrees);
router.delete('/programDegree/:program_id/:degree_id', deleteProgramDegree);

module.exports = router;
