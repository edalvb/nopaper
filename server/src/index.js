import express from "express";
import { graphqlHTTP } from "express-graphql"; // Esto es un Midlelware
import schema from "./schema";

const app = express();

app.get("/", (req, res) => { res.json({ message: "Hola Mundo" }) });

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

app.listen(3001, () => console.log("Server on port 3000"));