import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Router } from 'express';
import recipeRouter from "./routes/recipe_route.js";
import sequelize from "./orm.js";

const app = express();

const options = {
	origin: 'http://localhost:3000'
}

app.use(cors(options));

dotenv.config({ path: "./config.env" });
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());

app.use(recipeRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
