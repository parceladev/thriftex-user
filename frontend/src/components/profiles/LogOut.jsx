import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRightFromBracket,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useLogout } from './../../utils/auth-api-service';

const LogOut = () => {
  const logout = useLogout();

  return (
    <button
      onClick={logout}
      className="flex items-center justify-between w-full gap-4 p-6 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-xl" />
        <span className="font-sans text-xl font-semibold uppercase">
          Log Out
        </span>
      </div>
      <FontAwesomeIcon className="text-xl" icon={faArrowRight} />
    </button>
  );
};

export default LogOut;
