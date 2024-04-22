import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getAccessToken, validateToken } from './token-utilities'; // Assume validateTokenAsync is an async function

const PrivateRoute = ({ element }) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const checkAccessToken = async () => {
      const token = getAccessToken();
      if (!token) {
        setIsUserLoggedIn(false);
        setChecked(true);
        return;
      }

      const validationResult = await validateToken(token); // Validate token asynchronously
      setIsUserLoggedIn(validationResult.valid);
      setChecked(true);
    };

    checkAccessToken();
  }, []);

  if (!checked) {
    return null; // Or loading spinner
  }

  return isUserLoggedIn ? element : <Navigate to="/auth/sign-in" replace />;
};

PrivateRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default PrivateRoute;
