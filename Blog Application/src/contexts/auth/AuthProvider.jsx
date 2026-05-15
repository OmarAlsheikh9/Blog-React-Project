import { useCallback, useMemo, useState } from 'react';
import { clearAuth, getUser, setToken, setUser } from '../../utils/helpers';
import { AuthContext } from './AuthContext';

export default function AuthProvider({ children }) {
  const [user, setUserState] = useState(() => getUser());

  const login = useCallback((session) => {
    setToken(session.accessToken);
    setUser(session.user);
    setUserState(session.user);
  }, []);

  const logout = useCallback(() => {
    clearAuth();
    setUserState(null);
  }, []);

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(user),
      login,
      logout,
    }),
    [user, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
