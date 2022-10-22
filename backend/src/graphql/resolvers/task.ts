import { ApolloError } from 'apollo-server-core';
import {
  CreateTaskVariables,
  GetTaskListsResponse,
  GetTaskListsVariables,
  GraphQLContext,
  MutationResponse,
} from '../../types/types';

const taskResolvers = {
  Query: {
    getTaskLists: async (
      _: any,
      args: GetTaskListsVariables,
      ctx: GraphQLContext
    ) => {
      console.log('INSIDE GET TASK LISTS 🔥🔥🔥');
      const { conversationId } = args;
      const { session, prisma } = ctx;

      if (!session) {
        return new ApolloError('Not Authorized');
      }

      try {
        const taskLists = await prisma.taskList.findMany({
          where: {
            conversationId,
          },
          include: {
            tasks: true,
          },
        });
        return taskLists;
      } catch (error: any) {
        return { error: error?.message };
      }
    },
  },
  Mutation: {
    createTaskList: async (
      _: any,
      args: CreateTaskVariables,
      ctx: GraphQLContext
    ): Promise<MutationResponse> => {
      console.log('INSIDE CREATE TASKLIST');
      const { session, prisma } = ctx;
      const { conversationId, title } = args;

      if (!session) {
        return { error: 'Not authorized' };
      }
      try {
        const newTaskList = await prisma.taskList.create({
          data: { conversationId, title, dateCreated: new Date() },
        });
        return { success: true };
      } catch (error: any) {
        return { error: error?.message };
      }
    },

    createTask: async (
      _: any,
      args: CreateTaskVariables,
      ctx: GraphQLContext
    ): Promise<MutationResponse> => {
      console.log('INSIDE CREATE TASK');
      const { title, taskListId } = args;
      const { session, prisma } = ctx;

      if (!session) {
        return { error: 'Not authorized' };
      }

      try {
        await prisma.task.create({
          data: {
            taskListId,
            title,
            dateCreated: new Date(),
          },
        });
        return { success: true };
      } catch (error: any) {
        return { error: error?.message };
      }
    },
  },
};

export default taskResolvers;
