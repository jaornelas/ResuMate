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
  
  async setEmailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
}
//initialize user model
export function userCreation(sequelize: Sequelize) {
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
    hooks: {
      beforeCreate: async (newUser) => {
        await newUser.setEmailToLowerCase();
      },
      beforeUpdate: async (updatedUser) => {
        await updatedUser.setEmailToLowerCase();
      },
    },
  }
);

export default User;
