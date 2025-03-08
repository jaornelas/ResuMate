import { User } from "../models/user";
import bcrypt from "bcrypt";

export const userSeeds = async () => {
  const users = [
    { password: "password1", email: "User1Test@email.com" },
    { password: "password2", email: "User2Test@email.com" },
    { password: "password3", email: "User3Test@email.com" },
    { password: "password4", email: "User4Test@email.com" },
    { password: "password5", email: "User5Test@email.com" },
  ];
  
  const hashedUsers = [];

  for (const user of users) {
    try {
      hashedUsers.push({
        ...user,
        password: bcrypt.hashSync(user.password, 10),
      });
    } catch (error) {
      console.error(`Error hashing password for user with email of ${user.email}:`, error);
    }
  }

  try {
    await User.bulkCreate(hashedUsers, { individualHooks: true, validate: true });
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};