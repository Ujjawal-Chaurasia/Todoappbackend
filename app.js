import express from "express";
import  cors from  'cors';
import  bodyParser   from "body-parser";
//Route Imports
import todosRoute from './routes/todo.js'
// import path from 'path'
// const __dirname=path.resolve();

const app=express();

var corsoption={
    origin:true,
    credentials:true
}
app.use(cors(corsoption));

app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use("/api/v1",todosRoute);

// app.use(express.static(path.join(__dirname,"./frontend/build")))
// app.get("*",(req,res)=>{
//     res.sendFile(path.resolve(__dirname,"./frontend/build/index.html"))
// })


export default app;