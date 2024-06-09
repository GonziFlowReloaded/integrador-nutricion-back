const FormData = require('../formData');

class FormDataFactory {
  static create(data) {
    return new FormData(data);
  }

  static async getAll() {
    return await FormData.find();
  }
}

module.exports = FormDataFactory;
