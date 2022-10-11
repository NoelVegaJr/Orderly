import { NextPageContext } from 'next';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import * as React from 'react';
import { useState } from 'react';
import ConversationsWrapper from './conversations/ConversationsWrapper';
import Modal from './conversations/Modal/Modal';
import FeedWrapper from './feed/FeedWrapper';

interface IChatProps {
  // session: Session;
}

const Chat: React.FunctionComponent<IChatProps> = () => {
  return (
    <div className='h-screen flex border border-red-600 bg-neutral-900'>
      <ConversationsWrapper />
      <FeedWrapper />
    </div>
  );
};

export default Chat;
