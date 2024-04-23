const express = require("express");
const dotenv = require("dotenv");

const numberRouter = require("./routes/numbers");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/", numberRouter);

app.listen(process.env.PORT, () =>{
    console.log(`Server ready on http://localhost:${PORT}`);
});