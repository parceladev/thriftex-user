import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { deleteToken } from '../../utils/TokenUtilities';

const LogOut = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    deleteToken();
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
