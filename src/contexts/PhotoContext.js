import React, {createContext, useState} from 'react';

export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
    const [photo, setPhoto] = useState('');

    return (
        <PhotoContext.Provider
            value={{
                photo,
                setPhoto,
            }}
        >
            {children}
        </PhotoContext.Provider>
    );
}

export default PhotoContextProvider;
