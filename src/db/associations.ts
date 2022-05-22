import Todo from "./models/ModelTodo";
import User from "./models/ModelUser";

Todo.belongsTo(User, { foreignKey: "iduser", as: "from" });
User.hasMany(Todo, {
  foreignKey: "iduser",
  as: "from",
});
