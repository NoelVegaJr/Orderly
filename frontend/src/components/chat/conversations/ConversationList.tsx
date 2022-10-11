import * as React from 'react';
import { useState } from 'react';
import ConversationModal from './ConversationListModal/ConversationListModal';

interface IConversationListProps {}

const ConversationList: React.FunctionComponent<IConversationListProps> = (
  props
) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='w-full'>
      <button
        onClick={() => setShowModal(true)}
        className='px-4 py-2 m-2 bg-neutral-900 w-52 lg:w-96'
      >
        Find or start a conversation
      </button>
      {showModal && <ConversationModal close={closeModal} />}
    </div>
  );
};

export default ConversationList;
