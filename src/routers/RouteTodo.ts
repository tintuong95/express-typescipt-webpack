import {  Router } from 'express';
import ControllerTodo from '../controllers/ControllerTodo';
import { upload } from '../utils/upload';

class RouteTodo {
    public router:Router;

    constructor(){
        this.router=Router();
        this.routes();
    }

    protected routes=()=>{
        this.router.get("/",ControllerTodo.index);
        this.router.post("/",ControllerTodo.create);
        this.router.get("/:id",ControllerTodo.show);     
        this.router.put("/:id",ControllerTodo.update);
        this.router.delete("/:id",ControllerTodo.delete);
    }
}

export default new RouteTodo().router