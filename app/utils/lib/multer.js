/**
=> Example usage:
 
const { multer } = require('../../../utils');

const uploadDiskImage = multer.createUploadInstance(
    'img',
    ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'],
    5
);
*/

const multer = require('multer');

const services = {};

services.createUploadInstance = (fieldName, allowedMimes, maxFileSizeInMb = 10) => {
    const storageDisk = multer.diskStorage({
        destination: (req, file, callback) => {
            callback(null, process.cwd() + '/uploads');
        },
        filename: (req, file, callback) => {
            callback(null, new Date().getTime() + '_' + file.originalname);
        },
    });

    const fileFilterDisk = function (req, file, cb) {
        const errMsg = `invalid file type. Only ${allowedMimes.toString()} files are allowed`;

        if (allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(
                {
                    success: false,
                    message: errMsg,
                },
                false
            );
        }
    };

    const oMulterObjDisk = {
        storage: storageDisk,
        fileFilter: fileFilterDisk,
        limits: {
            fileSize: maxFileSizeInMb * 1024 * 1024, // 10mb default
        },
    };

    return multer(oMulterObjDisk).single(fieldName);
};

module.exports = services;
