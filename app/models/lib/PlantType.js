const mongoose = require('mongoose');
const data = require('../../../enum');

const PlantType = mongoose.Schema(
    {
        eType: {
            type: String,
            enum: data.type,
        },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('plant_type', PlantType);
