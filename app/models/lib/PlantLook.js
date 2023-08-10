const mongoose = require('mongoose');
const data = require('../../../enum');

const PlantLook = mongoose.Schema(
    {
        eLook: {
            type: String,
            enum: data.looks,
        },
        oReferencePlantType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_type',
        },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('plant_look', PlantLook);
