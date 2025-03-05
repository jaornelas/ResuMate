import {
  Model,
  type InferAttributes,
  type InferCreationAttributes,
  type CreationOptional,
    DataTypes,
  type Sequelize,
} from 'sequelize';
    
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare email: string;
  declare password: string;
  
  async setEmailToLowerCase() {
    this.email = this.email.toLowerCase();
  }
}
  
export function userCreation(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
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
      hooks: {
        beforeCreate: async (newUserData) => {
          await newUserData.setEmailToLowerCase();
        },
        beforeUpdate: async (updatedUserData) => {
          await updatedUserData.setEmailToLowerCase();
        },
      },
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: "user",
      }
  );
    
  return User;
}
