import React, {createContext, useState} from 'react';

export const LoginContext = createContext();

const LoginContextProvider = ({ children }) => {
    const [isValidLogin, setIsValidLogin] = useState(false);
    const [defaultUsername] = useState('juanitoperez');
    const [defaultPassword] = useState('123123');

    const login = userCredentials => {
        if (userCredentials 
            && userCredentials.username === defaultUsername 
            && userCredentials.password === defaultPassword) {
            
            setIsValidLogin(true);
        } else {
            setIsValidLogin(false);
        }
    }

    const logout = () => {
        setIsValidLogin(false);
    }

    return (
        <LoginContext.Provider
            value={{
                login,
                isValidLogin,
                logout,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
}

export default LoginContextProvider;
