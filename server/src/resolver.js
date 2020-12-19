export const resolvers = {
    Query: {
        hello: () => {
            return "Hola mundo con GraphQL"
        },
        saludar(root, {name}) {
            console.log(name);
            return 4;
        }
    }
}