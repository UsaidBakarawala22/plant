const mongoose = require('mongoose');
const data = require('../../../enum');

const PlantHeight = mongoose.Schema(
    {
        eHeight: {
            type: String,
            enum: data.treeHeight,
        },
        oReferencePlantType: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_type',
        },
        oReferencePlantLook: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_look',
        },
        oReferencePlantfruit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_fruit',
        },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('plant_height', PlantHeight);
