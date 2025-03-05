import { User } from "../models/user";
import bcrypt from "bcrypt";

export const userSeeds = async () => {
  const users = [
    { username: "User1", password: "password1", email: "User1Test@email.com" },
    { username: "User2", password: "password2", email: "User2Test@email.com" },
    { username: "User3", password: "password3", email: "User3Test@email.com" },
    { username: "User4", password: "password4", email: "User4Test@email.com" },
    { username: "User5", password: "password5", email: "User5Test@email.com" },
  ];
  
  const hashedUsers = [];

  for (const user of users) {
    try {
      hashedUsers.push({
        ...user,
        password: bcrypt.hashSync(user.password, 10),
      });
    } catch (error) {
      console.error(`Error hashing password for user ${user.username}:`, error);
    }
  }

  console.log('hashedUsers', hashedUsers);

  try {
    await User.bulkCreate(hashedUsers, { individualHooks: true, validate: true });
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};