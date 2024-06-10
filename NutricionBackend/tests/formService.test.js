// services/formService.test.js
const formService = require('../src/services/formService');
const FormData = require('../src/models/formData');

jest.mock('../src/models/formData');

describe('formService', () => {
  describe('createFormData', () => {
    it('should create and save formData', async () => {
      const mockFormData = { apariencia: 5 };
      const savedFormData = { id: '123', ...mockFormData };
      FormData.prototype.save = jest.fn().mockResolvedValue(savedFormData);

      const result = await formService.createFormData(mockFormData);

      expect(result).toEqual(savedFormData);
    });
  });

  describe('getAllFormData', () => {
    it('should return all formData', async () => {
      const mockFormData = [{ id: '123', apariencia: 5 }];
      FormData.find = jest.fn().mockResolvedValue(mockFormData);

      const result = await formService.getAllFormData();

      expect(result).toEqual(mockFormData);
 });
});
});