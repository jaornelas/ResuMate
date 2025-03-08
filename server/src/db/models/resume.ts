import { DataTypes, Model } from "sequelize";
import sequelize from "../config/connection";//import db connection
import User from "./user"

//define structure of resume in table in psql
class Resume extends Model {
  declare id: number;
  declare userId: number; //user id to make sure it is correct user. 
  declare name: string;
  declare email: string;
  declare experience: string;
}

//initialize the resume model
Resume.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: User, //links to the User model
        key: "id",
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    experience: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Resume",
    tableName: "resumes",
    timestamps: true,
  }
);

export default Resume;
