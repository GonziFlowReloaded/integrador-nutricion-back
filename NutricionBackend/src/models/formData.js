const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
  apariencia: { type: Number, required: true },
  aroma: { type: Number, required: true },
  sabor: { type: Number, required: true },
  textura_boca: { type: Number, required: true },
  sensaciones: { type: String, required: true },
  textura_morder: { type: Number, required: true },
  aspecto_irregularidad: { type: String, required: true },
  sensacion_granulado_arenoso: { type: Number, required: true },
  aroma_percibe: { type: String, required: true },
  sabor_predominante: { type: String, required: true },
  crujiente: { type: Number, required: true },
  estrellas_general: { type: Number, required: true },
  volver_consumir: { type: Number, required: true }
});

module.exports = mongoose.model('FormData', FormDataSchema);
