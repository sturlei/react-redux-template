
import { ApolloServer } from "apollo-server-express";
import { loadFiles } from "graphql-import-files";
import moment from "moment";

const typeDefs = loadFiles( './schema/**/*.{graphql,gql}' )
const resolvers = {
    Query: {
        dateNow: () => moment.now(),
    },

}
const apolloServer = new ApolloServer( { typeDefs, resolvers, }, );
module.exports = apolloServer.getMiddleware()
