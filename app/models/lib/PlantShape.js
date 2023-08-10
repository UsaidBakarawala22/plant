const mongoose = require('mongoose');
const data = require('../../../enum');

const PlantShape = mongoose.Schema(
    {
        eShape: {
            type: String,
            enum: data.treeShape,
        },
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
        oReferencePlantfruit: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_fruit',
        },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('plant_shape', PlantShape);
