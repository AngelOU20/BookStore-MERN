import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const mongoDBURL = process.env.DB_CNN;

// export const mongoDBURL =
//   "mongodb+srv://angelprueba81:CbGL3unhQ1EuOv7q@books-store-mern.xagcvsd.mongodb.net/books-collection";
