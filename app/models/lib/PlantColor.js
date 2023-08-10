const mongoose = require('mongoose');
const data = require('../../../enum');

const PlantColor = mongoose.Schema(
    {
        eColor: {
            type: String,
            enum: data.color,
        },
        aSubColor: {
            type: [String],
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
        oReferencePlantShape: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'plant_shape',
        },
    },
    { timestamps: { createdAt: 'dCreatedAt', updatedAt: 'dUpdatedAt' } }
);

module.exports = mongoose.model('plant_color', PlantColor);
