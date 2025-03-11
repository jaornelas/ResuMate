//exports all models
import { Sequelize } from "sequelize";
import sequelize from "../config/connection";
import User from "./user";
import Resume from "./resume";

// Define model relationships
User.hasMany(Resume, { foreignKey: "userId", onDelete: "CASCADE" });
Resume.belongsTo(User, { foreignKey: "userId" });

export { sequelize, User, Resume };
