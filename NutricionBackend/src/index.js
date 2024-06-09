const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const formRoutes = require('./routes/formRoutes'); 
require('dotenv').config(); 

const app = express(); // Creating an instance of Express

//definimos el puertito
const PORT = process.env.PORT || 3000;

// mongo uri de env
const MONGO_URI = process.env.MONGO_URI;

// Middleware para parsear json en peticiones
app.use(express.json());

// cors
app.use(cors());

// seteamos la ruta mase para el api y la asociamos con fromRoutes
app.use('/api', formRoutes);

// conectamos mongo 
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB'); // Log que queremos ver
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`); // Log para el servidor
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message); // Log que no queremos ver
    process.exit(1); // Salimops del proceso con el codigo de fallo
  });
