const { v4: uuidv4 } = require('uuid');
const { uploadToR2, getFromR2 } = require('../services/r2Service');

const uploadImage = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      console.error('No file uploaded');
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    const uniqueFileName = uuidv4();
    await uploadToR2(file, uniqueFileName);

    const imageUrl = `${process.env.R2_PUBLIC_URL}/${uniqueFileName}`;
    res.status(200).json({ message: 'File uploaded successfully.', url: imageUrl });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Error uploading file.' });
  }
};

const getImage = async (req, res) => {
  try {
    const filename = req.params.filename;
    const fileStream = await getFromR2(filename);
    fileStream.pipe(res);
  } catch (error) {
    console.error('Error fetching file:', error);
    res.status(500).json({ error: 'Error fetching file.' });
  }
};

module.exports = {
  uploadImage,
  getImage,
};
