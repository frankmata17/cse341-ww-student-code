const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const app = express();
const port = process.env.PORT || 8080;

app.use(cors()); // Allow all origins

app.use(express.json()); // Middleware for JSON

const professionalRoutes = require('./routes'); // Ensure this is correctly importing your routes
app.use(professionalRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
