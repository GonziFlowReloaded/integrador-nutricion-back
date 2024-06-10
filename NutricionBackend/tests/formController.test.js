// controllers/formController.test.js
const formController = require('../src/controllers/formController');
const formService = require('../src/services/formService');

jest.mock('../src/services/formService');

describe('formController', () => {
  let req, res;

  beforeEach(() => {
    req = { body: {} };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  describe('postFormData', () => {
    it('should call formService.createFormData and return 201 with formData', async () => {
      const mockFormData = { id: '123', apariencia: 5 };
      formService.createFormData.mockResolvedValue(mockFormData);
      req.body = mockFormData;

      await formController.postFormData(req, res);

      expect(formService.createFormData).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(mockFormData);
    });

    it('should return 500 when there is an error', async () => {
      const errorMessage = 'Error occurred';
      formService.createFormData.mockRejectedValue(new Error(errorMessage));

      await formController.postFormData(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
    });
  });

  describe('getFormData', () => {
    it('should call formService.getAllFormData and return 200 with formData', async () => {
      const mockFormData = [{ id: '123', apariencia: 5 }];
      formService.getAllFormData.mockResolvedValue(mockFormData);

      await formController.getFormData(req, res);

      expect(formService.getAllFormData).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith(mockFormData);
    });

    it('should return 500 when there is an error', async () => {
      const errorMessage = 'Error occurred';
      formService.getAllFormData.mockRejectedValue(new Error(errorMessage));

      await formController.getFormData(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: errorMessage });
 });
});
});