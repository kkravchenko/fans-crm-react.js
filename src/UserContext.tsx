import React, { createContext, useState, ReactNode } from 'react'
import { User, UserContextProps } from './types.dt'

const UserContext = createContext<UserContextProps | undefined>(undefined)

const UserProvider = ({ children }: { children: ReactNode }): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  const login = (user: User): void => {
    setUser(user)
  }

  const logout = (): void => {
    setUser(null)
  }

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }
