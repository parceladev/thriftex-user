import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const MyLegit = () => {
  return (
    <a
      href="/user/my-legit"
      className="flex items-center justify-between w-full gap-4 p-6 cursor-pointer"
    >
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faCheckDouble} className="text-xl" />
        <span className="font-sans text-xl font-semibold uppercase">
          My Legit Check
        </span>
      </div>
      <FontAwesomeIcon className="text-xl" icon={faArrowRight} />
    </a>
  );
};

export default MyLegit;
