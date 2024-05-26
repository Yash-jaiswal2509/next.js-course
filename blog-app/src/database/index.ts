import mongoose from "mongoose";

const connectDB = async () => {
  const connectionURL = process.env.MONGODB_CONNECTION_STRING as string;

  mongoose
    .connect(connectionURL)
    .then(() => console.log("Connected to DB"))
    .catch((error) => console.log(error));
};

export default connectDB;
