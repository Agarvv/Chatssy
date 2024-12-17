import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/index';
import { setError } from 'src/store/apiStatus/apiStatusSlice';


const useImageUpload = () => {
    const dispatch: AppDispatch = useDispatch() 
    const [imageUrl, setImageUrl] = useState(null);

    const uploadImage = async (file: File) => {
        if (!file) {
            dispatch(setError('No image provided.'))
            return;
        }
        
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || '');

        try {
            const response = await axios.post(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
                formData
            );
            setImageUrl(response.data.secure_url);
        } catch (err) {
            console.log(err)
        }
    };

    return { imageUrl, uploadImage };
};

export default useImageUpload;