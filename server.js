import express from "express";
import { configDotenv } from "dotenv";
import router from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/db.js";
import productRouter from "./routes/productRoutes.js";

configDotenv();

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", router);
app.use("/api/product", productRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log("listening on port 5000");
});
