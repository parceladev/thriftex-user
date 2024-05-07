import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MyLegit = () => {
  return (
    <a
      href="/user/my-legit"
      className="flex items-center justify-between w-full gap-4 py-4 cursor-pointer hover:bg-gray-200"
    >
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faCheckDouble} className="text-xl" />
        <span className="text-xl font-semibold uppercase font-sans">My Legit Check</span>
      </div>
      <FontAwesomeIcon className="text-xl" icon={faArrowRight} />
    </a>
  );
};

export default MyLegit;
