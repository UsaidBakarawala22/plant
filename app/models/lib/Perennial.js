const mongoose = require('mongoose');
// const data = require('../../../enum');

const Perennial = mongoose.Schema(
    {
        eHeight: { type: [String] },
        eColor: { type: String },
        aRedColor: { type: String },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('perennial', Perennial);
