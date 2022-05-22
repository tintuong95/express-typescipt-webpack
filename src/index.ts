//import module
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import dotenv from "dotenv";
import morgan from "morgan";
import path from "path";


//import file
import "./db/associations";
import RouteIndex from "./routers/index";
import { sequelize } from "./db/config";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.connectDB();
    this.plusgin();
    this.routes();
  }

  protected routes = () => {
    this.app.use("/api", RouteIndex);
  };

  protected plusgin = () => {
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, "../public")));
    this.app.use(helmet());
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(morgan("dev"));
    dotenv.config();

    
  };

  protected connectDB = () => {
    sequelize.sync({ alter: true });
  };
}

new App().app.listen(process.env.PORT || 4000, async () => {
  console.log("Success!", process.env.PORT || 4000);
});
