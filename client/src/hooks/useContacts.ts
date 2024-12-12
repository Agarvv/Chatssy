import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setContacts } from 'src/store/chat/chatSlice';
import { AppDispatch } from 'src/store/apiStatus/apiStatusStore';
import { getUserContacts } from 'src/api/services/chat/ChatService';

const useContacts = () => {
    const dispatch: AppDispatch = useDispatch();
    
    return useQuery('contacts', getUserContacts)



    /* return useQuery(
        ['contacts'] as const, // Asegura que sea un array de tu tipo esperado
        getUserContacts()
        /* {
            onSuccess: (data) => {
                console.log('User contacts', data);
                dispatch(setContacts(data));
            },
            onError: (error) => {
                console.error('Oops', error);
                dispatch(setError('Something went wrong while loading your contacts'));
            },
        } 
    );  */ 
};

export default useContacts;