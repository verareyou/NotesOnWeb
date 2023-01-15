import express from "express";
import cors from "cors";
import {graphqlHTTP} from "express-graphql";
import color from "colors";
import connectDB from "./config/db.js";
import schema from "./schema/schema.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());

connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port : ${PORT}`.yellow.bold);
});