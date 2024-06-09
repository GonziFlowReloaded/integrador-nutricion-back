const FormDataFactory = require('../models/factories/formDataFactory');

const createFormData = async (data) => {
  const formData = FormDataFactory.create(data);
  return await formData.save();
};

const getAllFormData = async () => {
  return await FormDataFactory.getAll();
};

module.exports = {
  createFormData,
  getAllFormData
};
