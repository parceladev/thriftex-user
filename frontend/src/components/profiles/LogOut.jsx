import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useLogout } from './../../utils/auth-api-service';

const LogOut = () => {
  const logout = useLogout();

  return (
    <button onClick={logout} className="flex items-center gap-4 cursor-pointer">
      <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-xl" />
      <span className="text-xl font-thin uppercase font-didot">Log Out</span>
    </button>
  );
};

export default LogOut;
