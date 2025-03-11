import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
    DataTypes,
  type Sequelize,
} from 'sequelize';
import sequelize from '../config/connection';
    
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare email: string;
  declare password: string;
}

//initialize user model
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Please enter a password",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "user",
    tableName: "users",
    timestamps: false,
    underscored: true,
  }
);

export default User;
