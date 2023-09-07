import app from "./app.js";
import connectDatabase from './database/database.js'
import dotenv from 'dotenv'

// Handling Uncaugt Exception 
process.on("uncaughtException",err=>{
    console.log(`Error:${err.message}`);
    console.log("sutting down the server due to uncaughtException error");
    process.exit(1);

})

dotenv.config({path:"backend/config/config.env"});
connectDatabase();
const server=app.listen(process.env.PORT,()=>{
    console.log(`server is working on port ${process.env.PORT}`)
})

//Unhandled promise rejections (means those promised which are not handled/catched eg. mongo spelling mistake )
process.on ("unhandledRejection",err=>{
    console.log(`Erroe:${err.message}`);
    console.log("sutting down the server due to unhandled promise rejection");
    server.close(()=>{
        process.exit(1);
    });
})