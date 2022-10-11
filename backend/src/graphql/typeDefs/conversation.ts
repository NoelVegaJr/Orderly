import { gql } from 'apollo-server-core';

const conversationTypeDef = gql`
  type Mutation {
    createConversation(participantIds: [String]): CreateConversationResponse
  }

  type CreateConversationResponse {
    conversationId: String
  }
`;

export default conversationTypeDef;
