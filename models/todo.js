import mongoose from "mongoose";

const TodoSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"todo"
    },
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        default:"des"
    }
})

const Todo=mongoose.model("Todo",TodoSchema);
export default Todo;