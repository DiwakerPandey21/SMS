const asyncHandler = require('express-async-handler');
const Enrollment = require('../models/Enrollment');

// @desc    Enroll a student in a course/batch
// @route   POST /api/enroll
// @access  Private/Admin (or Student?)
const enrollStudent = asyncHandler(async (req, res) => {
    const { student, course, batch } = req.body;

    // Check if already enrolled
    const existingEnrollment = await Enrollment.findOne({
        student,
        course,
        batch,
    });

    if (existingEnrollment) {
        res.status(400);
        throw new Error('Student already enrolled in this course batch');
    }

    const enrollment = await Enrollment.create({
        student,
        course,
        batch,
    });

    res.status(201).json(enrollment);
});

// @desc    Get enrollments for a student
// @route   GET /api/enroll/student/:studentId
// @access  Private (Admin or Self)
const getStudentEnrollments = asyncHandler(async (req, res) => {
    const enrollments = await Enrollment.find({ student: req.params.studentId })
        .populate('course', 'name courseCode credits')
        .populate('batch', 'batchName startDate endDate');

    res.json(enrollments);
});

module.exports = {
    enrollStudent,
    getStudentEnrollments,
};
