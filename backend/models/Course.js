const mongoose = require('mongoose');

const courseSchema = mongoose.Schema({
    courseCode: {
        type: String,
        required: true,
        unique: true, // e.g., CS101
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    credits: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
