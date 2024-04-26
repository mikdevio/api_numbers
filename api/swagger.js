const dotenv = require("dotenv");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

dotenv.config();

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Numbers API Rest",
            description: "API endpoints for a number array processing.",
            contact: {
                name: "Mikdevio",
                email: "mikdevio@gmail.com",
                url: "https://github.com/mikdevio/api_numbers"
            },
            version: "1.0.0",
        },
        servers: [
            {
                url: `http://localhost:${process.env.PORT}/`,
                description: "Local server"
            },
        ]
    },
    apis: ["./api/routes/*.js"],
}

const swaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app, port) {
    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
}

module.exports = swaggerDocs;
