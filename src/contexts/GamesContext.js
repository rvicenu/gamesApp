import React from 'react';
import React, {createContext, useState} from 'react';

export const GamesContext = createContext();

const GamesContext = () => {
    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <GamesContext.Provider
            value={{
                isLoading,
            }}
        >
            {children}
        </GamesContext.Provider>
    );
}

export default GamesContext;
