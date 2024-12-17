import { useState, useEffect } from 'react';

export const useMessage = () => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('url');

    ws.onopen = () => {
      console.log('WebSocket is open now.');
    };

    ws.onclose = () => {
      console.log('WebSocket is closed now.');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);
 
  const emitMessage = (message) => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(message);
    } else {
      console.warn('WebSocket not ready.');
    }
  };

  return { emitMessage };
};