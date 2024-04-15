import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');

    navigate('/auth/sign-in');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center gap-4 cursor-pointer"
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-xl" />
      <span className="text-xl font-thin uppercase font-didot">Log Out</span>
    </button>
  );
};

export default LogOut;
