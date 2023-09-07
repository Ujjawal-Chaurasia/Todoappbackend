import Todo from "../models/todo.js";

export const getTodos=async(req,res)=>{
    try{
        const todos= await Todo.find(); 
        res.status(200).json({todos});
    }catch(error){
        console.log(error);
        res.status(500).send( {error:"internel server error inside todoscontroller gettodos"}  )
    }

}
export const getTodo=async(req,res)=>{
    const {id}=req.params;
    try {
        const todo=await Todo.findById({id:id});
        if(!todo){
            res.status(404).json({msg:"todo not found in database"});
        }
        res.status(200).json({success:true,todo});
    } catch (error) {
        console.log(error);
        res.status(500).send( {error:"internel server error inside todoscontroller gettodo"}  )        
    }

}
export const createTodo=async(req,res)=>{
    const {title,description,status,id}=req.body;
    try {
        const todo = await Todo.create({
            id:id,title:title,description:description,status:status
        })
        res.status(201).json({message:"Todo created Successfully",todo});
    } catch (error) {
        console.log(error);
        res.status(500).send( {error:"internel server error createtodo"}  )          
    }
}
export const updateTodo=async(req,res)=>{
    try {
        const {title,description}=req.body;
        let todo =await Todo.findById(req.params.id);
        if(!todo){
            res.status(404).json({message:"todo not found in database to update"})
        }
        // todo=await Todo.findByIdAndUpdate(req.params.id,req.body,{
        //     new:true,
        //     runValidators:true,
        //     useFindAndModify:false
        // })
        todo.title=title;
        todo.description=description;
        await todo.save();
        res.status(200).json({
            message:"todo updated successfully",todo
        })
    } catch (error) {
        console.log(error);
        res.status(500).send( {error:"internel server error  updatetodo"}  )          
    }

}
export const updateTodoStatus=async(req,res)=>{
    try {
        const {status}=req.body;
        let todo =await Todo.findOne({id:req.params.id});
        // console.log(todo)
        if(!todo){
            res.status(404).json({message:"todo not found in database to update"})
        }
        todo.status=status;
        // console.log(todo);
        await todo.save();
        res.status(200).json({
            message:"Status updated successfully"
        })
    } catch (error) {
        
    }
}
export const deleteTodo=async(req,res)=>{
    const {id}=req.params
    try {
        const todo=await Todo.findOne({id:id});
        if(!todo){
            res.status(404).json({message:"todo not found in database to delete"})
        }
        await todo.deleteOne();
        res.status(200).json({message:"todo deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send( {error:"internel server error deletetodo"}  )           
    }
}