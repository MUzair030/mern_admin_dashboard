import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import mongoose from "mongoose";
import Routes from "./routes/index.js";
import {User} from "./model/entity/user.model.js";
import {dataUser} from "./data/index.js";


// configs
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


// add routes
Routes(app);

// connect with database
mongoose.connect(process.env.MONGO_URL).then(() => {
    app.listen(process.env.SERVER_PORT);
    console.log(`Server Started on port : ${process.env.SERVER_PORT}`)
    // User.insertMany(dataUser);
}).catch(err => console.log(`Server failed to start ${err}`));