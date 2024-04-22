const express = require("express");

const numberRouter = require("./routes/numbers");

const app = express();

// Conection port
const PORT = 3500;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", numberRouter);

app.listen(PORT, () =>{
    console.log(`Server ready on http://localhost:${PORT}`);
});