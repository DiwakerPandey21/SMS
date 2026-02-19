const mongoose = require('mongoose');

const batchSchema = mongoose.Schema({
    batchName: {
        type: String, // e.g., 'Batch A 2023'
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
}, {
    timestamps: true,
});

const Batch = mongoose.model('Batch', batchSchema);

module.exports = Batch;
