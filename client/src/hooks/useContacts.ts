import { useQuery, QueryClient } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setContacts, setError } from 'src/store/chat/chatSlice';
import { AppDispatch } from 'src/store/apiStatus/apiStatusStore';
import { getUserContacts } from 'src/api/services/chat/ChatService';

const useContacts = () => {
    const dispatch: AppDispatch = useDispatch();
    const queryClient = new QueryClient();

    return useQuery(
        ['contacts'],
        getUserContacts,
        {
            onSettled(data, error) {
                if (error) {
                    console.error(error)
                    dispatch(setError('Something went wrong while loading your contacts'));
                } else {
                    console.log('contacts', data)
                    // dispatch(setContacts(data));
                }
            }
        }
    );
};

export default useContacts;