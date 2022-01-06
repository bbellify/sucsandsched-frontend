import { Navigate } from 'react-router-dom'

function RequireAuth({ children, redirectTo }) {
    let isAuthenticated = localStorage.getItem('token');
    return isAuthenticated ? children : <Navigate to={redirectTo} />
  }

  export default RequireAuth