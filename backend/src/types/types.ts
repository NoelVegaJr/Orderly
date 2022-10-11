import { PrismaClient } from '@prisma/client';
import { ApolloError } from 'apollo-server-core';

export interface CreateUsernameResponse {
  success?: boolean;
  error?: string;
}

export interface SearchUsernameResponse {
  users?: Array<SearchedUser> | ApolloError | null;
  error?: ApolloError;
}

export interface SearchedUser {
  id: string;
  username: string;
}

export interface GraphQLContext {
  session: Session | null;
  prisma: PrismaClient;
}

export interface Session {
  user?: User;
}

export interface User {
  id: string;
  name?: string | null;
  username: string;
  email?: string | null;
  image?: string | null;
}
