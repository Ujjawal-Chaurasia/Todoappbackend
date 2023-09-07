import mongoose from "mongoose";
const connectDatabase=()=>{
    console.log(process.env.DB_URL)
 mongoose.connect(process.env.DB_URL).then((data)=>{
    console.log(`Mongodb connected with server ${data.connection.host}`)
}).catch((err)=>{
    console.log("mongodb connection error")
    console.log(err);
})
}

export default connectDatabase