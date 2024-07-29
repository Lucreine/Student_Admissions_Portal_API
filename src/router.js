const express = require('express');

const studentRouter = require('./routers/studentsRouter.js');
const universityRouter = require('./routers/universityRouter.js');
const authRouter = require("./routers/auth.js");
const courseRouter = require("./routers/coursesRouter.js");
const degreeRouter = require("./routers/degreeRouter.js");
const programRouter = require("./routers/programRouter.js");
const programDegreeRouter = require("./routers/programDegreeRouter.js");
const courseProgramRouter = require("./routers/courseProgramRouter.js");
const admissionRouter = require("./routers/admissionRouter.js");
const courseStudentRouter = require("./routers/courseStudentRouter.js");

const router = express();


router.use("/login", authRouter);
router.use('/students', studentRouter);
router.use('/university', universityRouter);
router.use('/courses', courseRouter);
router.use('/degrees', degreeRouter);
router.use('/programs', programRouter);
router.use('/programs-degrees', programDegreeRouter);
router.use('/courses-programs', courseProgramRouter);
router.use('/admissions', admissionRouter);
router.use('/courses-students', courseStudentRouter);

module.exports = router;
