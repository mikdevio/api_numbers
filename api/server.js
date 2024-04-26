const express = require("express");
const dotenv = require("dotenv");

const swaggerDocs = require("./swagger");
const numberRouter = require("./routes/numbers");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api", numberRouter);

// API Docs
swaggerDocs(app, process.env.PORT);


app.listen(process.env.PORT, () =>{
    console.log(`Server ready on http://localhost:${process.env.PORT}`);
});