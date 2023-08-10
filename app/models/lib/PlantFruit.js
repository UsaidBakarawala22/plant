const mongoose = require('mongoose');
// const data = require('../../../enum');

const PlantFruits = mongoose.Schema(
    {
        oReferencePlantType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_type',
        },
        oReferencePlantLook: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_look',
        },
        oReferencePlantHeight: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_height',
        },
        isFruit: { type: Boolean },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('plant_fruit', PlantFruits);
