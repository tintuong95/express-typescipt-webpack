import { Request, Response } from "express";
import Todo from "../db/models/ModelTodo";
import User from "../db/models/ModelUser";

class ServiceTodo {
  protected req: Request;
  protected res: Response;

  constructor(request: Request, response: Response) {
    this.req = request;
    this.res = response;
  }

  public index = async (): Promise<Response> => {
    try {
      const response = await Todo.findAll({
       include:[{model:User,as:'from'}]
      });
      return this.res.json({
        massage: "Success!",
        data: response,
      });
    } catch (e) {
      return this.res.json({
        massage: e,
      });
    }
  };

  public create = async (): Promise<Response> => {
    console.log(this.req.path)
    try {
      const response = await Todo.create(this.req.body);
      return this.res.json({
        massage: "Success!",
      });
    } catch (e) {
      return this.res.status(400).json({
        massage: e,
      });
    }
  };

  public show = async (): Promise<Response> => {
    try {
      const { id } = this.req.params;
      const response = await Todo.findOne({
        where: { id },
      });
      if (response !== null) {
        return this.res.json({
          message: "Success",
          data: response,
        });
      }
      return this.res.status(404).json({
        massage: "Not found",
      });
    } catch (e) {
      return this.res.status(400).json({
        massage: e,
      });
    }
  };

  public update = async (): Promise<Response> => {
    try {
      const { id } = this.req.params;
      const response = await Todo.findOne({
        where: { id },
      });
      if (response !== null) {
        response.update({ ...response, ...this.req.body });
        response.save();
        return this.res.json({
          massage: "success!",
          data: response,
        });
      }
      return this.res.status(404).json({
        massage: "Not found",
      });
    } catch (e) {
      return this.res.status(400).json({
        massage: e,
      });
    }
  };

  public delete = async (): Promise<Response> => {
    try {
      const { id } = this.req.params;
      const response = await Todo.findOne({
        where: { id },
      });
      if (response !== null) {
        return this.res.json({
          massage: "success!",
        });
      }
      return this.res.status(404).json({ massage: "not found" });
    } catch (e) {
      return this.res.status(400).json({ massage: e });
    }
  };
}

export default ServiceTodo;
