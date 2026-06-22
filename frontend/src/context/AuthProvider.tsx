import { useState, type ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import { getUser, logout as logoutFn, type User } from "../lib/auth";

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getUser());

  function logout() {
    setUser(null);
    logoutFn();
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
