const asyncHandler = require('express-async-handler');
const Course = require('../models/Course');

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public (or Private)
const getCourses = asyncHandler(async (req, res) => {
    const courses = await Course.find({});
    res.json(courses);
});

// @desc    Get course by ID
// @route   GET /api/courses/:id
// @access  Public
const getCourseById = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        res.json(course);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

// @desc    Create a course
// @route   POST /api/courses
// @access  Private/Admin
const createCourse = asyncHandler(async (req, res) => {
    const { courseCode, name, description, credits } = req.body;

    const courseExists = await Course.findOne({ courseCode });

    if (courseExists) {
        res.status(400);
        throw new Error('Course already exists');
    }

    const course = await Course.create({
        courseCode,
        name,
        description,
        credits,
    });

    res.status(201).json(course);
});

// @desc    Update course
// @route   PUT /api/courses/:id
// @access  Private/Admin
const updateCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        course.courseCode = req.body.courseCode || course.courseCode;
        course.name = req.body.name || course.name;
        course.description = req.body.description || course.description;
        course.credits = req.body.credits || course.credits;

        const updatedCourse = await course.save();
        res.json(updatedCourse);
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

// @desc    Delete course
// @route   DELETE /api/courses/:id
// @access  Private/Admin
const deleteCourse = asyncHandler(async (req, res) => {
    const course = await Course.findById(req.params.id);

    if (course) {
        await course.deleteOne();
        res.json({ message: 'Course removed' });
    } else {
        res.status(404);
        throw new Error('Course not found');
    }
});

module.exports = {
    getCourses,
    getCourseById,
    createCourse,
    updateCourse,
    deleteCourse,
};
