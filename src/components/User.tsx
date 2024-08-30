import { useContext, useEffect } from 'react'
import { type NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../UserContext'
import type { UserContextProps } from '../types.dt'

const User = (): JSX.Element => {
  const userContext: UserContextProps | undefined = useContext(UserContext)
  const navigate: NavigateFunction = useNavigate()

  useEffect(() => {
    if (!userContext || !userContext.user) {
      navigate('/login', { replace: true })
    }
  }, [userContext, navigate])

  const handleLogout = (): void => {
    userContext?.logout()
    navigate('/login', { replace: true })
  }

  return (
    <div>
      <h2>User Info</h2>
      <p>Name: {userContext?.user?.username}</p>
      <p>Email: {userContext?.user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default User
