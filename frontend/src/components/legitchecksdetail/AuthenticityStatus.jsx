import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const AuthenticityStatus = ({ status, message }) => {
  const statusStyles = {
    fake: 'text-red-600',
    original: 'text-green-600',
    processing: 'text-orange-300',
  };

  return (
    <div className="mb-3">
      <h3 className="mb-2 text-lg font-semibold text-black uppercase">
        AUTHENTICITY
      </h3>
      <div className={`flex items-center ${statusStyles[status]}`}>
        <FontAwesomeIcon icon={faExclamationCircle} />
        <span className="ml-2">{message}</span>
      </div>
    </div>
  );
};

AuthenticityStatus.propTypes = {
  status: PropTypes.oneOf(['fake', 'original', 'processing']),
  message: PropTypes.string.isRequired,
};

export default AuthenticityStatus;
