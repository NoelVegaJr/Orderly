import { gql } from '@apollo/client';

export default {
  Query: {
    getTaskLists: gql`
      query GetTaskLists($conversationId: String!) {
        getTaskLists(conversationId: $conversationId) {
          # id
          id
          title
          tasks {
            id
            title
          }
        }
      }
    `,
  },
  Mutations: {
    createTaskList: gql`
      mutation CreateTaskList($conversationId: String!, $title: String!) {
        createTaskList(conversationId: $conversationId, title: $title) {
          error
          success
        }
      }
    `,
    createTask: gql`
      mutation CreateTask($taskListId: String!, $title: String!) {
        createTask(taskListId: $taskListId, title: $title) {
          error
          success
        }
      }
    `,
  },
};
