import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import User from './components/User'
import Home from './components/Home'
import { UserProvider } from './UserContext'
import './App.scss'

const App = (): JSX.Element => {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  )
}

export default App
