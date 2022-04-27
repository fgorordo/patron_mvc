const express = require('express');
const app = express()
const PORT = 3030;
const indexRoutes = require('./routes/index.js')

app.use(express.static('public'))

app.listen(PORT, () => {
  console.log('Servidor corriendo corractamente en el puerto ',PORT);
})

app.use(indexRoutes);