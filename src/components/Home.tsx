import { Link } from 'react-router-dom'

export default (): JSX.Element => (
  <ul>
    <li>
      <Link to="/login" title="Login page">
        Login
      </Link>
    </li>
    <li>
      <Link to="/user" title="User page">
        User
      </Link>
    </li>
  </ul>
)
