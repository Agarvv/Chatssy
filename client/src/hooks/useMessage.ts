import { useRef } from 'react';

export const useMessage = () => {
  const socket = useRef(null);

  const emitMessage = (message) => {
    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      socket.current.send(message);
    } else {
      console.warn('WebSocket not ready.');
    }
  };

  return { emitMessage };
};