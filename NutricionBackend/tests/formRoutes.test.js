const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');
const formRoutes = require('../src/routes/formRoutes');

// Mock formController
jest.mock('../src/controllers/formController', () => ({
  postFormData: jest.fn((req, res) => res.status(201).json(req.body)),
  getFormData: jest.fn((req, res) => res.status(200).json([{ name: 'Test', email: 'test@example.com' }])),
}));

const app = express();
app.use(bodyParser.json());
app.use(formRoutes); // Use the routes directly without a path prefix

describe('Form Routes', () => {
  it('should POST form data', async () => {
    const formData = {
      name: 'Test',
      email: 'test@example.com'
    };

    const response = await request(app)
      .post('/form-data')
      .send(formData);

    expect(response.status).toBe(201); // Expect a 201 status code for a successful creation
    expect(response.body).toEqual(formData); // Expect the response to be equal to the sent data
  });

  it('should GET form data', async () => {
    const response = await request(app)
      .get('/form-data');

    expect(response.status).toBe(200); // Expect a 200 status code for a successful request
    expect(response.body).toEqual([{ name: 'Test', email: 'test@example.com' }]); // Expect the response to contain the expected data
  });
});
