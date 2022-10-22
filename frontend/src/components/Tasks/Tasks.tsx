import { IConversation } from '../../utils/types';
import AddTaskListButton from './AddTaskListButton';
import TaskOperations from '../../graphql/operations/task';
import { useQuery } from '@apollo/client';
import TaskList from './TaskList';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from 'react-beautiful-dnd';
import { useEffect, useState } from 'react';

interface TasksProps {
  conversation: IConversation;
}

const Tasks: React.FunctionComponent<TasksProps> = ({ conversation }) => {
  const {
    data: taskLists,
    loading,
    error,
  } = useQuery(TaskOperations.Query.getTaskLists, {
    variables: { conversationId: conversation.id },
  });
  const [lists, setLists] = useState<any[]>([]);

  useEffect(() => {
    if (taskLists?.getTaskLists) {
      setLists((prev) => [...taskLists.getTaskLists]);
      console.log('inside tasks: ', lists);
    }
  }, [taskLists]);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (
      (source.droppableId === destination?.droppableId &&
        destination?.index === source.index) ||
      !destination
    )
      return;

    const cpLists = [...lists];

    if (destination.droppableId === 'test') {
      console.log('moving list');
      const targetTaskList = lists[source.index];
      cpLists.splice(source.index, 1);
      cpLists.splice(destination.index, 0, targetTaskList);
      setLists((prev) => cpLists);
    } else {
      console.log('moving task');
      const srcListTasks = [
        ...cpLists.find((list: any) => list.id === source.droppableId).tasks,
      ];
      const targetTask = srcListTasks[source.index];
      const dstListTasks = [
        ...cpLists.find((list: any) => list.id === destination.droppableId)
          .tasks,
      ];
      console.log(targetTask);
      srcListTasks.splice(source.index, 1);
      if (source.droppableId === destination.droppableId) {
        srcListTasks.splice(destination.index, 0, targetTask);
      } else {
        dstListTasks.splice(destination.index, 0, targetTask);
      }

      const eh = [] as any;

      cpLists.forEach((list: any) => {
        const cpList = { ...list };
        if (list.id === source.droppableId) {
          cpList.tasks = srcListTasks;
        } else if (list.id === destination.droppableId) {
          cpList.tasks = dstListTasks;
        }
        eh.push(cpList);
      });
      console.log(eh);
      setLists((prev) => [...eh]);
      console.log(lists);
    }
  };
  console.log('rendering lists');
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {lists && (
        <Droppable droppableId='test' direction='horizontal' type='column'>
          {(provided, snapshot) => {
            return (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className='grow flex  overflow-x-auto gap-2 p-4 '
              >
                {lists &&
                  lists?.map((taskList: any, index: number) => {
                    return (
                      <Draggable
                        key={taskList.id}
                        draggableId={taskList.id}
                        index={index}
                      >
                        {(provided, snapshot) => {
                          return (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                            >
                              <TaskList
                                taskList={taskList}
                                conversation={conversation}
                              />
                            </div>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                {provided.placeholder}
                <AddTaskListButton conversation={conversation} />
              </div>
            );
          }}
        </Droppable>
      )}
    </DragDropContext>
  );
};

export default Tasks;
