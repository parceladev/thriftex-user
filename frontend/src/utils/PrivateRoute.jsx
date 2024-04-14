import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element }) => {
  const token = localStorage.getItem('token');
  const isUserLoggedIn = !!token;

  // Ensure the element is returned as a JSX element, not as a direct component reference
  return isUserLoggedIn ? element : <Navigate to="/auth/sign-in" replace />;
};

PrivateRoute.propTypes = {
  element: PropTypes.element.isRequired,
};

export default PrivateRoute;
