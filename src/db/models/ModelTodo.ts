
import {Model,InferAttributes,InferCreationAttributes,CreationOptional, DataTypes, ForeignKey, NonAttribute} from "sequelize"
import { sequelize } from "./../config";
import User from "./ModelUser";

class Todo extends Model<InferAttributes<Todo>,InferCreationAttributes<Todo>> {
    declare id:CreationOptional<number>;
    declare iduser:ForeignKey<User['id']>;
    declare name:string;
    declare description:string;
    declare image:string;
    declare person?:NonAttribute<User>;
}

Todo.init({
    id:{
        type:DataTypes.INTEGER.UNSIGNED,
        primaryKey:true,
        autoIncrement:true,
    }
    ,
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    description:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false,
    }
   
},{sequelize,tableName:"Todos"})



export default Todo