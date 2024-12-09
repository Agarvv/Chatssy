import React from 'react';

import ChatboxHeader from './ChatboxHeader/ChatboxHeader';
import Message from './Message/Message';
import ChatboxFooter from './ChatboxFooter/ChatboxFooter';

const Chatbox = () => {
  return (
    <main>
     <ChatboxHeader />
      
      <div className="message-list">
        <Message />
      </div>

      <ChatboxFooter />
    </main>
  );
};

export default Chatbox;
