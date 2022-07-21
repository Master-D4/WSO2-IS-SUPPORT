import 'dotenv/config';
import express from "express";
//import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
//import {connect} from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || "8000";

//APP MIDDLEWARE
// app.use(bodyParser.json());
// app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

//IMPORT ROUTES
// const markingSchemaRoutes = require('./api/routes/markingSchema.r');
// app.use(markingSchemaRoutes);

// const panelSchemaRoutes = require('./api/routes/panel.r');
// app.use(panelSchemaRoutes);

// app.use("/api", require("./api/routes/user.auth.r"));
app.get("/", (req, res) => {
    res.send("<h2>Hello World!</h2>");
});


app.listen(PORT, () => {
    console.log('SERVER IS UP AND RUNNING ON PORT :', PORT);
    //connect();
});