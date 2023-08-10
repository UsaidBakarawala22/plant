const mongoose = require('mongoose');
const data = require('../../../enum');

const Tree = mongoose.Schema(
    {
        eLooks: { type: String, enum: data.looks },
        aHeight: { type: [String] },
        aShape: { type: [String] },
        isFruits: { type: Boolean },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('tree', Tree);
