const asyncHandler = require('express-async-handler');
const Batch = require('../models/Batch');

// @desc    Get all batches
// @route   GET /api/batches
// @access  Public (or Private)
const getBatches = asyncHandler(async (req, res) => {
    const batches = await Batch.find({}).populate('course', 'name courseCode');
    res.json(batches);
});

// @desc    Get batch by ID
// @route   GET /api/batches/:id
// @access  Public
const getBatchById = asyncHandler(async (req, res) => {
    const batch = await Batch.findById(req.params.id).populate('course', 'name courseCode');

    if (batch) {
        res.json(batch);
    } else {
        res.status(404);
        throw new Error('Batch not found');
    }
});

// @desc    Create a batch
// @route   POST /api/batches
// @access  Private/Admin
const createBatch = asyncHandler(async (req, res) => {
    const { batchName, course, startDate, endDate } = req.body;

    const batch = await Batch.create({
        batchName,
        course,
        startDate,
        endDate,
    });

    res.status(201).json(batch);
});

// @desc    Update batch
// @route   PUT /api/batches/:id
// @access  Private/Admin
const updateBatch = asyncHandler(async (req, res) => {
    const batch = await Batch.findById(req.params.id);

    if (batch) {
        batch.batchName = req.body.batchName || batch.batchName;
        batch.course = req.body.course || batch.course;
        batch.startDate = req.body.startDate || batch.startDate;
        batch.endDate = req.body.endDate || batch.endDate;

        const updatedBatch = await batch.save();
        res.json(updatedBatch);
    } else {
        res.status(404);
        throw new Error('Batch not found');
    }
});

// @desc    Delete batch
// @route   DELETE /api/batches/:id
// @access  Private/Admin
const deleteBatch = asyncHandler(async (req, res) => {
    const batch = await Batch.findById(req.params.id);

    if (batch) {
        await batch.deleteOne();
        res.json({ message: 'Batch removed' });
    } else {
        res.status(404);
        throw new Error('Batch not found');
    }
});

module.exports = {
    getBatches,
    getBatchById,
    createBatch,
    updateBatch,
    deleteBatch,
};
