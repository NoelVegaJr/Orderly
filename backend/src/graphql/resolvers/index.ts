import merge from 'lodash.merge';
import userResolvers from './user';
import conversationResolvers from './conversation';

export const resolvers = merge({}, userResolvers, conversationResolvers);
export default resolvers;
