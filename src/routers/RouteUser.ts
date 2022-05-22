import { Router } from "express";
import ControllerUser from "../controllers/ControllerUser";

class RouteUser {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  protected routes = () => {
    this.router.post("/login", ControllerUser.login);
    this.router.post("/signup", ControllerUser.signup);
    this.router.delete("/:id", ControllerUser.delete);
    this.router.put("/:id", ControllerUser.update);
  };
}

export default new RouteUser().router;
