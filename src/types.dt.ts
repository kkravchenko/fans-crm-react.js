export interface User {
  username: string
  email: string
  password: string
}

export interface UserContextProps {
  user: User | null
  login: (user: User) => void
  logout: () => void
}
