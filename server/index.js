const express = require("express");
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const colors = require("colors");
const schema = require("./schema/schema");
const { graphqlHTTP } = require("express-graphql");
const connectBD = require("./config/db");
const app = express();

//Coonnect to dataBase
connectBD();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
