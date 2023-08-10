const mongoose = require('mongoose');
const data = require('../../../enum');

const Plant = mongoose.Schema(
    {
        eType: { type: String, enum: data.type },
        eLook: { type: String },
        eHeight: { type: String, enum: data.treeHeight },
        eShape: { type: String },
        isFruit: { type: Boolean },
        eColor: { type: String },
        aSubcolor: { type: String },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('plant', Plant);
