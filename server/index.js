require("dotenv").config();
const app = require("../server/App/app");
const PORT = process.env.PORT;
const connectDB = require("../server/Utils/db");
const cors = require("cors");
const cookieparser = require("cookie-parser");
const userRouter = require("../server/Routes/userRoutes");
const bodyparser = require("body-parser");
const  express  = require("express");
const carRouter = require("../server/Routes/carRoutes");


connectDB();

app.use(express.json());
app.use(cors({
    origin:["http://localhost:5173"],
    credentials:true
}));
app.use(cookieparser());
app.use(bodyparser.urlencoded({extended:true}));
app.use("/api/v1/",userRouter);
app.use("/api/v1/",carRouter);


app.listen(`${PORT}`,()=>{
    console.log(`The server is running at http://localhost:${PORT}`)
})
