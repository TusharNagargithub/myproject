import express from "express"
import cors from "cors"
import { dbconnect } from "./database/mydatabase.js";
import rout1 from "./route/userrouter.js"

const app = express();
const rout = express.Router();
app.use(express.json());


app.use("/app",rout1);
app.use("/ro",rout);


app.use(
    cors(
        {
            origin:"http://localhost:5173",
            method:["GET","POST","PUT","DELETE"],
        }
    )
);

dbconnect(app);

export default app;