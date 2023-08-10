const mongoose = require('mongoose');
const data = require('../../../enum');

const Shrub = mongoose.Schema(
    {
        eLooks: { type: String, enum: data.looks },
        eHeight: { type: [String] },
        eShape: { type: String },
        isFruits: { type: Boolean },
        eColor: { type: String },
        aRedColor: { type: String },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('shrub', Shrub);
