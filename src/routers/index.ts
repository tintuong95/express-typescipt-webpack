import {Router} from "express"
import RouteTodo from "./RouteTodo";
import RouteUser from "./RouteUser"

class RouteIndex {
    public router:Router;
    constructor(){
        this.router=Router();
        this.routes()
    }
    protected routes=()=>{
        this.router.use("/user",RouteUser)
        this.router.use("/todo",RouteTodo)
    }
}

export default new RouteIndex().router