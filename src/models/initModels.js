import Category from "./categories.model.js";
import Task from "./tasks.model.js";
import User from "./users.model.js";

const initModels = () => {
  // Relación Categorías y Tareas
  // Una tarea tiene una categoría
  Task.belongsTo(Category, {foreignKey: 'categoryId'}),
  // Una categoría puede tener muchas tareas
  Category.hasMany(Task, {foreignKey: 'categoryId'});

  Task.belongsTo(User, {foreignKey: 'userId'}),
  // Una categoría puede tener muchas tareas
  User.hasMany(Task, {foreignKey: 'userId'});
};

export default initModels;