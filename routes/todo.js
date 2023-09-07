import express from 'express'
const router =express.Router()
import {getTodo,getTodos,createTodo,updateTodo,deleteTodo,updateTodoStatus} from '../controllers/todoscontroller.js'
router.get("/:id",getTodo);
router.get("/",getTodos);
router.post("/create",createTodo)
router.put("/update/:id",updateTodo)
router.put("/updatestatus/:id",updateTodoStatus)

router.delete("/delete/:id",deleteTodo)


export default router