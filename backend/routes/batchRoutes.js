const express = require('express');
const router = express.Router();
const {
    getBatches,
    getBatchById,
    createBatch,
    updateBatch,
    deleteBatch,
} = require('../controllers/batchController');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/').get(getBatches).post(protect, admin, createBatch);
router
    .route('/:id')
    .get(getBatchById)
    .put(protect, admin, updateBatch)
    .delete(protect, admin, deleteBatch);

module.exports = router;
