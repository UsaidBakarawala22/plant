/**
=> to use this service, you need to use multer service.

=> Example usage:
 
const { aws } = require('../../../utils');

const uploadedFile = await aws.uploadFileToS3(
    req.file,
    user._id,
    'profile-pic'
);

-> to create & upload thumb image:

const uploadedFile = await aws.uploadFileToS3(
    req.file,
    user._id,
    'profile-pic',
    true
);
*/

const AWS = require('aws-sdk');
const fs = require('fs');
const jimp = require('jimp');

AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    signatureVersion: 'v4',
    region: process.env.S3_REGION,
});

const s3 = new AWS.S3();

const services = {};

services.uploadFileToS3 = async (ObjFile, id, folderName, thumb = false) => {
    let fileBuffer = fs.readFileSync(ObjFile.path);

    if(thumb) {
        const jimpImage = await jimp.read(fileBuffer);
        fileBuffer =
            await jimpImage
                .scaleToFit(100, 100)
                .getBufferAsync(ObjFile.mimetype);
    }

    const filePath = `${folderName}/${id}`;

    const params = {
        Body: fileBuffer,
        Bucket: process.env.S3_BUCKET_NAME,
        ContentType: ObjFile.mimetype,
        Key: filePath,
    };

    return s3.upload(params).promise();
};

module.exports = services;
