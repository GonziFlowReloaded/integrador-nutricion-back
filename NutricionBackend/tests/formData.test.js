const FormData = require('../src/models/formData');
const FormDataFactory = require('../src/models/factories/formDataFactory');

// Mock the FormData model
jest.mock('../src/models/formData');

describe('FormDataFactory', () => {
  describe('create', () => {
    it('should create a new FormData instance with the given data', () => {
      const data = { name: 'Test' };
      const formDataInstance = { ...data };

      FormData.mockImplementation(() => formDataInstance);

      const result = FormDataFactory.create(data);

      expect(result).toEqual(formDataInstance);
      expect(FormData).toHaveBeenCalledWith(data);
    });
  });

  describe('getAll', () => {
    it('should return all form data', async () => {
      const mockData = [{ id: 1, name: 'Test' }];
      FormData.find.mockResolvedValue(mockData);

      const result = await FormDataFactory.getAll();

      expect(result).toEqual(mockData);
      expect(FormData.find).toHaveBeenCalled();
    });

    it('should handle errors correctly', async () => {
      const errorMessage = 'Database error';
      FormData.find.mockRejectedValue(new Error(errorMessage));

      await expect(FormDataFactory.getAll()).rejects.toThrow(errorMessage);
      expect(FormData.find).toHaveBeenCalled();
    });
  });
});
