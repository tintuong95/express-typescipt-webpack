import { Request, Response } from "express";
import User from "../db/models/ModelUser";

class ServiceUser {
  protected req: Request;
  protected res: Response;
  constructor(request: Request, response: Response) {
    this.req = request;
    this.res = response;
  }
  public signup = async (): Promise<Response> => {
    
    try {
      const response = await User.create({ ...this.req.body });
      return this.res.json({
        data: response,
        massage: "Success!",
      });
    } catch (e) {
      return this.res.json({
        massage: e,
      });
    }
  };

  public login = async (): Promise<Response> => {
    try {
      const { username, password } = this.req.body;
      const response = await User.findOne({
        where: { username },
      });
      if (response !== null) {
        return this.res.json({
          massage: "Success!",
        });
      }
      return this.res.json({ massage: "Fail!" });
    } catch (e) {
      return this.res.json({ massage: e });
    }
  };

  public update = async (): Promise<Response> => {
    try {
      const { id } = this.req.params;
      const { username, password } = this.req.body;
      const response = await User.findOne({
        where: { id },
      });
      if (response !== null) {
        response.update({ username, password });
        response.save();
        return this.res.json({
          massage: "Success!",
        });
      }

      return this.res.status(404).json({ massage: "Not Found!" });
    } catch (e) {
      return this.res.json({
        massage: e,
      });
    }
  };

  public delete = async (): Promise<Response> => {
    try {
      const { id } = this.req.params;
      const response = await User.findOne({
        where: { id },
      });
      if (response !== null) {
        response.destroy();
        return this.res.json({
          massage: "Success!",
        });
      }
      return this.res.json({
        massage: "Error!",
      });
    } catch (e) {
      return this.res.status(404).json({
        massage: "Not found",
      });
    }
  };
}

export default  ServiceUser;
