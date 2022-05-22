import { Request, Response } from "express";
import ServiceUser from "../services/ServiceUser";

class ControllerUser {
  public signup = (req: Request, res: Response): void => {
    const service = new ServiceUser(req, res);
    service.signup();
  };
  public login = (req: Request, res: Response): void => {
    const service = new ServiceUser(req, res);
    service.login();
  };
  public update = (req: Request, res: Response): void => {
    const service = new ServiceUser(req, res);
    service.update();
  };
  public delete = (req: Request, res: Response): void => {
    const service = new ServiceUser(req, res);
    service.delete();
  };
}

export default new ControllerUser();
