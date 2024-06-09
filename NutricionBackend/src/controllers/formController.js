const formService = require('../services/formService');

const postFormData = async (req, res) => {
  try {
    console.log('Form data received:', req.body); // Log incoming data
    const formData = await formService.createFormData(req.body);
    res.status(201).json(formData);
  } catch (error) {
    console.error('Error in postFormData:', error);
    res.status(500).json({ message: error.message });
  }
};

const getFormData = async (req, res) => {
  try {
    const formData = await formService.getAllFormData();
    res.status(200).json(formData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postFormData,
  getFormData
};
