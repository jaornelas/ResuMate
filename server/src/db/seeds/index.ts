import { userSeeds } from "./userSeeds.js";
import sequelize from "../config/connection.js";
// import seeds for other models
import { createDatabase } from "./createDatabase.js"; // Import the createDatabase function


// Ensure to seed the imported models when added
const seedAll = async (): Promise<void> => {
  try {
    await createDatabase();
    await sequelize.sync({ force: true });
    console.log("\nDB SYNCED\n");

    await userSeeds();
    console.log("\nUSERS SEEDED\n")

    process.exit(0);
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedAll();