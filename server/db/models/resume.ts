import { DataTypes, Model } from "sequelize";
import sequelize from "//where is sequelize coming from???";//import db connection

//define structure of resume in table in psql
class Resume extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public experience!: string;
}

//initialize the resume model
Resume.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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
