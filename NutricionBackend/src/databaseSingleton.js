const mongoose = require('mongoose');
require('dotenv').config();

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    if (!Database.instance) {
      const uri = process.env.MONGO_URI;
      mongoose.connect(uri)
        .then(() => {
          console.log('Connected to MongoDB');
          // Aquí almacenamos la instancia de la conexión
          Database.instance = mongoose.connection;
        })
        .catch((error) => {
          console.error('Error connecting to MongoDB:', error);
        });
    }

    return Database.instance;
  }
}

const instance = new Database();
Object.freeze(instance);

module.exports = instance;
