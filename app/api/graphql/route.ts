import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
const typeDefs = gql`
  type Query {
    test: String
  }
  type Mutation {
    bichne(message: String): String
  }
`;
const resolvers = {
  Query: {
    test: () => "Test from backend",
  },
  Mutation: {
    bichne: (_: any, { message }: { message: string }) => {
      return `Амжилттай хадгалагдлаа: ${message}`;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
const handler = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };