const CourseProgram = require('../models/courseProgramModels');
const courseModels = require('../models/coursesModels');
const programModels = require('../models/programModels');

const createCourseProgram = async (course_id, program_id) => {
    const course = await courseModels.findByPk(course_id);
    const program = await programModels.findByPk(program_id);

    if (!course || !program) {
        throw new Error('Course or Program not found');
    }

    await course.addProgram(program);
    return { message: 'Program added to course successfully' };
};

const getCoursePrograms = async (course_id) => {
    const course = await courseModels.findByPk(course_id, {
        include: {
            model: programModels,
            as: 'programs'
        }
    });

    if (!course) {
        throw new Error('Course not found');
    }

    return course.programs;
};

const deleteCourseProgram = async (course_id, program_id) => {
    const course = await courseModels.findByPk(course_id);
    const program = await programModels.findByPk(program_id);

    if (!course || !program) {
        throw new Error('Course or Program not found');
    }

    await course.removeProgram(program);
    return { message: 'Program removed from course successfully' };
};

module.exports = {
    createCourseProgram,
    getCoursePrograms,
    deleteCourseProgram
};
