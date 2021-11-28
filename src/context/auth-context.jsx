import { createContext, useState, useCallback } from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
});

export function AuthContextProvider(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  const context = {
    isLoggedIn: isLoggedIn,
    login: login,
    logout: logout,
  };

  return (
    <AuthContext.Provider value={context}>{props.children}</AuthContext.Provider>
  );
}

export default AuthContext;
