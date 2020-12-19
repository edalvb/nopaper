import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolver";

const typeDefs = `
    type Query {
        hello: String
        saludar(name: String): String
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});