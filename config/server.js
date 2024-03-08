const express = require('express');
const routes = require('../app/routes/routes');
const clientRoutes = require('../app/routes/clienteRoutes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const app = express();
require('dotenv').config()

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use(cors());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/', routes);
app.use('/', clientRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;