import { GraphQLContext } from '../../types/types';
const conversationResolvers = {
  Mutation: {
    createConversation: async (
      _: any,
      args: { participantIds: Array<string> },
      ctx: GraphQLContext
    ) => {
      console.log(args);
      console.log('INSIDE CREATE CONVERSATION RESOLVER 🎉');
    },
  },
};

export default conversationResolvers;
