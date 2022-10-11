import * as React from 'react';
import ConversationList from './ConversationList';

interface IConversationsWrapperProps {}

const ConversationsWrapper: React.FC<IConversationsWrapperProps> = (props) => {
  return (
    <div className='text-white bg-neutral-800'>
      <ConversationList />
    </div>
  );
};

export default ConversationsWrapper;
