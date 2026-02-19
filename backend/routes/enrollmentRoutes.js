const express = require('express');
const router = express.Router();
const {
    enrollStudent,
    getStudentEnrollments,
} = require('../controllers/enrollmentController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, enrollStudent);
router.route('/student/:studentId').get(protect, getStudentEnrollments);

module.exports = router;
