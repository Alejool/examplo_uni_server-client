const express = require('express');
const axios = require('axios');
const app = express();
const cors = require('cors');
const PORT = 3001;

app.use(cors());
// Ruta para obtener datos de la API pública
app.get('/api/public', async (req, res) => {
 try {
    const response = await axios.get('https://api.chucknorris.io/jokes/random');


    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener datos de la API' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
