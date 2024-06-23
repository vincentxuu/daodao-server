const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const stream = require('stream');

const s3Client = new S3Client({
  region: process.env.R2_REGION,
  endpoint: process.env.R2_ENDPOINT,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

const uploadToR2 = async (file, filename) => {
  try {
    const params = {
      Bucket: process.env.R2_BUCKET_NAME,
      Key: filename,
      Body: file.buffer,
      ContentType: file.mimetype,
      ACL: 'public-read',
    };
    const command = new PutObjectCommand(params);
    await s3Client.send(command);
  } catch (error) {
    console.error('Error uploading to R2:', error);
    throw new Error('Upload to R2 failed');
  }
};
const getFromR2 = async (filename) => {
  const params = {
    Bucket: process.env.R2_BUCKET_NAME,
    Key: filename,
  };
  const command = new GetObjectCommand(params);
  const { Body } = await s3Client.send(command);
  const passThrough = new stream.PassThrough();
  Body.pipe(passThrough);
  return passThrough;
};

module.exports = {
  uploadToR2,
  getFromR2,
};
