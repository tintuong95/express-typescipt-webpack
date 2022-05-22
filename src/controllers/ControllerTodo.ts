import { Request, Response } from "express"
import ServiceTodo from "../services/ServicerTodo"


class ControllerTodo {
    public index=(req:Request,res:Response):void=>{
        const service= new ServiceTodo(req,res)
        service.index()
    }
    public create=(req:Request,res:Response):void=>{
        const service= new ServiceTodo(req,res)
        service.create()
    }
    public show=(req:Request,res:Response):void=>{
        const service= new ServiceTodo(req,res)
        service.show()
    }
    public update=(req:Request,res:Response):void=>{
        const service= new ServiceTodo(req,res)
        service.update()
    }
    public delete=(req:Request,res:Response):void=>{
        const service= new ServiceTodo(req,res)
        service.delete()
    }
}

export default new ControllerTodo()