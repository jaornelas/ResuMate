// import dotenv from "dotenv";
// // import path from "path";

// dotenv.config();

// import { Sequelize } from "sequelize";

// const sequelize = process.env.DB_URL
//   ? new Sequelize(process.env.DB_URL)
//   : new Sequelize(
//     process.env.DB_NAME || "",
//     process.env.DB_USER || "",
//     String(process.env.DB_PASSWORD) || "",
//     {
//       host: "localhost",
//       dialect: "postgres",
//       dialectOptions: {
//         decimalNumbers: true,
//       },
//     }
// );

// export default sequelize;

import dotenv from "dotenv";
// import path from "path";

dotenv.config();

import { Sequelize } from "sequelize";

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
    process.env.DB_NAME || "",
    process.env.DB_USER || "",
    String(process.env.DB_PASSWORD) || "",
    {
      host: process.env.DB_HOST || "localhost",
      dialect: "postgres",
      dialectOptions: {
        decimalNumbers: true,
      },
    }
);

export default sequelize;